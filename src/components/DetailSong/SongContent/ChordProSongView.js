const e = React.createElement;

function superLine(item) {
  // on identifie les accords dans la ligne
  var regExp = /\[([^\]]+)\]/g ;
  var accords = item.match(regExp);

  // Si pas d'accord ligne simple
  if (accords == null) {
    return (e("div",{className:"lineSimple"},item));
  } else {
    // Sinon on décompose
    var tokens = [];
    var newItem = item; // Ligne initiale
    accords.forEach(function(accord) {
      var idx = newItem.indexOf(accord);
      const accordBrut = accord.replace('[','').replace(']','');
      // On reprend le texte avant l'accord
      if (idx > 0)
        tokens.push(newItem.substr(0,idx));
      // Puis un span pour l'accord
      tokens.push(e("span",{className:"chord"}, " " + accordBrut));
      // On ne garde que le reste de la ligne à traiter
      newItem = newItem.substr(idx + accord.length);
    });
    // S'il y a encore du texte (après le dernier accord trouvé), on l'ajoute
    if (newItem.length > 0)
      tokens.push(newItem);

    return (e("div",{className:"lineMedium"},tokens));
  }
}

import "./ChordProSongView.css";

class ChordProSongView extends React.Component {
  render() {
    return(
      <div className="partition"><br/>
      {this.props.content.map(function(item,idx){
      return (
        superLine(item)
      )})}
      </div>
    )
  }
}

ChordProSongView.propTypes = {
  content : React.PropTypes.object,
}


export default ChordProSongView;
