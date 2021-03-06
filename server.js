var path = require('path');
var bodyParser = require("body-parser");
var express = require('express');
var app = express();
var query = require('pg-query');
var when = require('when');
import mockups from 'express-mockups-middleware';
import mockupsdata from './mockups/mockups';
const resources = ['Resource1','Resource2'];
var request = require('request');
var cheerio = require('cheerio');
var rp = require('request-promise');
var iconv = require('iconv-lite');
var _ = require('lodash');
//query.connectionParameters='postgres://benoitvilletard@localhost:5432/songbook';



var PORT = process.env.PORT || 8080

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));

  app.use(mockups(mockupsdata));
}

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html')
});

// Configure CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/songs", function(req, res) {
  var songs = {};
  when.all([
  	query('SELECT * FROM songs'),
  ]).spread(function(result1, result2, result3) {
    // C'est degueu... pour recuperer les rows de chaque result.
    var rows1 = result1[0];

    rows1.forEach(function(item) {
      var zeMat = Object.assign(item, {});
      songs[item.id] = zeMat;
    });
    return res.json(songs);
  });
});

app.get('/scrape/:artist', function(req, res){
  var artist = req.params.artist;
  artist = _.startCase(artist).replace(' ','-');
  console.log("Retrieving songs for ", artist);
  var options = {
      uri: 'http://www.boiteachansons.net/Artistes/' + artist + '.php',
      transform: function (body) {
          return cheerio.load(body);
      }
  };

  rp(options)
      .then(function ($) {
          var json = [];
          // Process html like you would with jQuery...
          $('.aLiensChansons').filter(function(){
              var data = $(this);
              var titre = data.find('.sLstPart_TitreChanson').text();
              var ic = iconv.decode(titre,'ISO-8859-15');
              var buf = iconv.encode(ic,'utf-8');
              console.log(buf.toString('utf-8'));
              var href = data.attr('href').replace('Partitions','Txt').replace('\.php','\.txt').replace('../','');
              href = 'http://www.boiteachansons.net/' + href;
              json.push({"title": titre,"href": href});
          })
          return res.send(JSON.stringify(json));
      })
      .catch(function (err) {
          // Crawling failed or Cheerio choked...
          console.log(err);
          return res.sendStatus(500,"Aie aie aie");
      });


});

app.post('/api/songs', (req, res, next) => {
  /*
  const data = {idmatiere: req.body.idmatiere, libelle: req.body.libelle,
    nbseances: req.body.nbseances,
    avecdevoir: req.body.avecdevoir};
  console.log(data);
  query('INSERT INTO sequences (idmatiere,libelle) VALUES ($1,$2) RETURNING id',[data.idmatiere,data.libelle],
  function(err, rows, result) {
    if (err) {console.log(err);
      return res.status(500).json(err);
    }
      else {
        var idsequence = rows[0].id;
        for (var i = 0; i < data.nbseances; i++) {
          query('INSERT INTO seances (idsequence, libelle) VALUES ($1,$2)',
          [idsequence, 'Séance ' + (i+1)]);
        }
        if (data.avecdevoir)
          query('INSERT INTO seances (idsequence, libelle) VALUES ($1,$2)',
          [idsequence, 'Devoir ']);
        return res.sendStatus(200);
      }
  })*/
  return res.sendStatus(200,'NOT YET IMPLEMENTED');
});

/*
app.post('/api/sequence/delete', (req, res, next) => {
  const data = {id: req.body.id};
  console.log(data);
  query('DELETE FROM sequences WHERE id=$1',[data.id],
  function(err, rows, result) {
    if (err) {console.log(err);
      return res.status(500).json(err);
    }
      else {
          query('DELETE FROM seances WHERE idsequence=$1',
          [data.id]);
        return res.sendStatus(200);
      }
  })
});*/

app.post('/api/login', (req,res,next) => {
  var token = {
    user : 'ben',
    roles: 'all'
  };
  var jwt = require('jsonwebtoken');
  var jwttoken = jwt.sign(token, 'shhhhh');
  res.set('x-auth-token',jwttoken);
  console.log("Token", jwttoken);
  return res.sendStatus(200,"Super ce login");
});

// Initialize the app.
app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
