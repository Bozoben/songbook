class TextSongView extends React.Component {
  render() {
    return(
      <div>
      <pre>
      {this.props.content.map(function(item,idx){
      return (
        <p key={idx}>{item}</p>
      )})}
      </pre>
      </div>
    )
  }
}

TextSongView.propTypes = {
  content : React.PropTypes.array,
}


export default TextSongView;
