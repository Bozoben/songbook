//import {detailMatiere} from '../../mocks';
import {Table, Button, Glyphicon, Panel} from 'react-bootstrap';
import { browserHistory } from 'react-router';
import SongContent from './SongContent/SongContent';
import SongEdit from './SongEdit/SongEdit';
import GrilleEdit from './GrilleEdit/GrilleEdit';

import "./DetailSong.css";

class DetailSong extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.state={edit: false};
  }

  onUpdate(song) {
    this.props.updateSong(song);
    this.toggleEdit();
  }
  toggleEdit() {
    let edit = !this.state.edit;
    this.setState({edit});
  }

  goBack() {
    browserHistory.goBack();
  }

  render() {
    var song = this.props.song;
    if (song)
    return (
      <div className="detailSong">
        <Button onClick={this.goBack} bsStyle="success" bsSize="small"><Glyphicon glyph="arrow-left"/> Retour</Button><br/>
        {song.title} - <i>{song.artist}</i> <Button onClick={this.toggleEdit} bsStyle="primary" bsSize="xsmall"> Editer</Button>
        <GrilleEdit/>
        <SongEdit showModal={this.state.edit} onClose={this.toggleEdit} song={song} onUpdate={this.onUpdate}/>
        <SongContent song={song}/>
      </div>
    );
    else
    return (<div>Ah c'est bizarre, rien trouvé<br/><a href="songs">Retour à la liste</a></div>);
  }
}


DetailSong.propTypes = {
  song : React.PropTypes.object,
}


export default DetailSong;
