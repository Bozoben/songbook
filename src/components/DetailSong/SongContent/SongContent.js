import TextSongView from './TextSongView';
import ChordProSongView from './ChordProSongView';

class SongContent extends React.Component {

  render() {
    if (this.props.song.format == 'text')
    return(
      <TextSongView content={this.props.song.content}/>
    )
    else if (this.props.song.format == 'chordpro')
    return(
      <ChordProSongView content={this.props.song.content}/>
    )
    else {
      return (<div>Ah zut format inconnu</div>)
    }
  }
}

SongContent.propTypes = {
  song : React.PropTypes.object,
}


export default SongContent;
