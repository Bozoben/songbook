import {Table, ProgressBar, Glyphicon} from "react-bootstrap";
import {Link} from 'react-router';


function FlagDevoir({ seanceAVenir }) {
  if (seanceAVenir.indexOf('Devoir') > 0) {
    return (<Glyphicon glyph="hand-right" htmlStyle="color:blue"/>);
  } else {
    return null;
  }
}

class VueSongs extends React.Component {
  constructor(props) {
    super(props);
    this.selectSong= this.selectSong.bind(this);
  }

  selectSong(e,item) {
    this.props.selectSong(item);
    e.preventDefault();
    return false;
  }

  render() {
    return (
      <div>
      <h4>Liste des chansons</h4>
      <ul>
      {this.props.songs.map(function(item,idx){
      return (
        <li key={idx}><a href="#" onClick={(event) => this.selectSong(event,item)}>{item.title}</a>

        </li>
      )}
    .bind(this))}
      </ul>
      </div>
    );
  }
}

VueSongs.defaultProps = {
  songs : [],
}

VueSongs.propTypes = {
  songs : React.PropTypes.array,
}

export default VueSongs;
