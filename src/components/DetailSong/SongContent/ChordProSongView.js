const e = React.createElement;

function superLine(item) {
  // on decompose la ligne en n tokens (soit du texte, soit un accord)
  var tokens = [];
  var newItem = item;
  var regExp = /\[([^\]]+)\]/g ;
  var accords = item.match(regExp);
  if (accords == null) {
    tokens.push(item);
  } else {
    accords.forEach(function(accord) {
      var idx = newItem.indexOf(accord);
      const accordBrut = accord.replace('[','').replace(']','');
      if (idx > 0)
        tokens.push(e("div",{className:"textToken"},newItem.substr(0,idx)));
      tokens.push(e("div",{className:"chord"}, accordBrut));
      newItem = newItem.substr(idx + accord.length);
      console.log("New item",newItem);
    });
    if (newItem.length > 0)
      tokens.push(e("div",{className:"textToken"},newItem));
  }

  //var allTokens = e("div",null,tokens);
  return (e("div",{className:"lineWithChords"},tokens));
}

import "./ChordProSongView.css";

class ChordProSongView extends React.Component {
  render() {
    return(
      <div><br/>
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
