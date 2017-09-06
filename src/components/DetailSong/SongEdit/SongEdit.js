//import "./DetailSong.css";
import {Input, Modal,Button,Grid,Row,Col} from 'react-bootstrap';
import {FormGroup,ControlLabel,FormControl,HelpBlock, Radio} from 'react-bootstrap';



class SongEdit extends React.Component {
  constructor(props) {
    super(props);
    var song = this.props.song;
    if (song) {
      this.state = {songContent: song.content.join("\n"), title:song.title, artist:song.artist, format:song.format};
    } else {
      this.state = {songContent:null, title:null, artist:null, format:'text'};
    }

    this.updateSong = this.updateSong.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  updateSong() {
    var song = {id: this.props.song.id, title: this.state.title, artist:this.state.artist, content:this.state.songContent.split("\n"), format:this.state.format};
    this.props.onUpdate(song);
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row><Col xs={6}>
        <FormGroup controlId="formControlTitle">
            <ControlLabel>Titre</ControlLabel>
            <FormControl type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
        </FormGroup>
        </Col>
        <Col xs={6}>
        <FormGroup controlId="formControlArtist">
            <ControlLabel>Artiste</ControlLabel>
            <FormControl type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
        </FormGroup>
        </Col></Row>
        <FormGroup>
          <ControlLabel>Format :{' '}</ControlLabel>{' '}
          <Radio name="format" inline value="text" onChange={this.handleChange} checked={this.state.format == 'text'}>
            Texte
          </Radio>
          {' '}
          <Radio name="format" inline value="chordpro" onChange={this.handleChange} checked={this.state.format == 'chordpro'}>
            Chordpro
          </Radio>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Contenu</ControlLabel>
          <FormControl name="songContent" componentClass="textarea" onChange={this.handleChange} value={this.state.songContent}
          rows="15"/>
        </FormGroup>
        <Button onClick={this.updateSong}>Update</Button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
}

SongEdit.propTypses = {
  showModal : React.PropTypes.func,
  onClose: React.PropTypes.func,
  song: React.PropTypes.object
}


export default SongEdit;
