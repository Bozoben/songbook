import api from '../src/actions/api';
const songs = require('./songs.json');

const data = [
  {
    "enabled": true,
    "pattern": "/api/login",
    "headers": [
      {
        "key": "X-AUTH-TOKEN",
        "value": "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjoiQWRtaW5CRSIsInJvbGVzIjoiQ05SJSUwLFVTRVIsREpPJSUwIiwiZXhwIjoxNDcwMjc4NzMwfQ.MhdTTaAiVm2HMeKPoQqZBNm8hy_n_EoniYaIFdqvz9usx4ag7YfJTaCgX1uA"
      }
    ],
    "status": 200
  },
  {
    pattern: '/songs/(.*)',
    body: (req) => {
      return songs[0]
    }
  },  
  {
    pattern: '/songs',
    body: (req) => {
      return songs
    }
  },


];

export default data;
