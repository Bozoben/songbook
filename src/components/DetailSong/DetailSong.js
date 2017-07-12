//import {detailMatiere} from '../../mocks';
import {Table, Button, Glyphicon, Panel} from 'react-bootstrap';
import { hashHistory } from 'react-router';

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

    return (
      <div class="detailSong">
      <Panel header={song.title} bsStyle="warning">
        To be done
      </Panel>

      <Button onClick={this.goBack} bsStyle="success" bsSize="small"><Glyphicon glyph="arrow-left"/> Retour</Button><br/>
      </div>
    );
  }
}


DetailSong.propTypes = {
  song : React.PropTypes.object,
}


export default DetailSong;
