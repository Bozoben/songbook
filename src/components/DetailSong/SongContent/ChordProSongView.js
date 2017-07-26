
function superLine(item) {
  var regExp = /\[([^\]]+)\]/g ;
  var accords = item.match(regExp);
  if (accords != null)
  accords.forEach(function(machin) {
    console.log("Accord",machin);
  });  
  const bidule=<div>{item}</div>;
  return (<p>{bidule}</p>)
}

class ChordProSongView extends React.Component {
  render() {
    return(
      <pre>
      {this.props.content.map(function(item,idx){
      return (
        superLine(item)
      )})}
      </pre>
    )
  }
}

ChordProSongView.propTypes = {
  content : React.PropTypes.object,
}


export default ChordProSongView;
