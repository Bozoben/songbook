import {Table, ProgressBar, Glyphicon} from "react-bootstrap";
import {Link} from 'react-router';


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
      <h4>Songs list</h4>
      <Table striped bordered condensed hover>
  <thead>
    <tr>
      <th>Titre</th>
      <th>Auteur</th>
    </tr>
  </thead>
  <tbody>
  {this.props.songs.map(function(item,idx){
  return (
    <tr key={idx}>
      <td><a href="#" onClick={(event) => this.selectSong(event,item)}>{item.title}</a></td>
      <td>{item.artist}</td>
    </tr>
  )}
.bind(this))}
  </tbody>
</Table>
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
