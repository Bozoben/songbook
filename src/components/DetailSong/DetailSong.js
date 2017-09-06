//import {detailMatiere} from '../../mocks';
import {Table, Button, Glyphicon, Panel} from 'react-bootstrap';
import { hashHistory } from 'react-router';
import SongContent from './SongContent/SongContent';
import SongEdit from './SongEdit/SongEdit';

import "./DetailSong.css";

class DetailSong extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.state={edit: false};
  }

  onUpdate(data) {
    var song = this.props.song;
    // On update juste le contenu (pas le titre etc)
    // Au passage conversion contenu de la saisie en tableau de string.
    song.content = data.split("\n");
    this.props.updateSong(song);
    this.toggleEdit();
  }
  toggleEdit() {
    let edit = !this.state.edit;
    this.setState({edit});
  }

  goBack() {
    hashHistory.goBack();
  }

  render() {
    var song = this.props.song;
    if (song)
    return (
      <div class="detailSong">
      <Panel header={song.title} bsStyle="warning">
      <i>{song.artist}</i>
        <SongEdit showModal={this.state.edit} onClose={this.toggleEdit} content={song.content} onUpdate={this.onUpdate}/>
        <SongContent song={song}/>
      </Panel>

      <Button onClick={this.toggleEdit} bsStyle="primary" bsSize="small">Editer</Button><Button onClick={this.goBack} bsStyle="success" bsSize="small"><Glyphicon glyph="arrow-left"/> Retour</Button><br/>
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
