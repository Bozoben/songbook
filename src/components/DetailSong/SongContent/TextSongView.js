class TextSongView extends React.Component {
  render() {
    return(
      <pre>
      {this.props.content.map(function(item,idx){
      return (
        <p>{item}</p>
      )})}
      </pre>
    )
  }
}

TextSongView.propTypes = {
  content : React.PropTypes.object,
}


export default TextSongView;
