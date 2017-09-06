//import "./DetailSong.css";
import {Input, Modal,Button,Row,Col} from 'react-bootstrap';
import {FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';



class SongEdit extends React.Component {
  constructor(props) {
    super(props);
    var contentAsString = this.props.content.join("\n");
    this.state = {songContent : contentAsString};
    this.updateSong = this.updateSong.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  updateSong() {
    // To be done
    this.props.onUpdate(this.state.songContent);
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Textarea</ControlLabel>
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

SongEdit.propTypes = {
  showModal : React.PropTypes.func,
  onClose: React.PropTypes.func,
  content: React.PropTypes.object
}


export default SongEdit;
