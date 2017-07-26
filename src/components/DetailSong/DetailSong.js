//import {detailMatiere} from '../../mocks';
import {Table, Button, Glyphicon, Panel} from 'react-bootstrap';
import { hashHistory } from 'react-router';
import SongContent from './SongContent/SongContent';

import "./DetailSong.css";

class DetailSong extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
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
        <SongContent song={song}/>
      </Panel>

      <Button onClick={this.goBack} bsStyle="success" bsSize="small"><Glyphicon glyph="arrow-left"/> Retour</Button><br/>
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
