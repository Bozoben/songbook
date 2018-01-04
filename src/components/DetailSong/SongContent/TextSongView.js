class TextSongView extends React.Component {
  render() {
    return(
      <pre>
      {this.props.content.map(function(item,idx){
      return (
        <p key={idx}>{item}</p>
      )})}
      </pre>
    )
  }
}

TextSongView.propTypes = {
  content : React.PropTypes.array,
}


export default TextSongView;
