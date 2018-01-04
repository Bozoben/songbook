import './GrilleItem.css';
import {Glyphicon} from 'react-bootstrap';

class GrilleItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.removeMesure = this.removeMesure.bind(this);
    this.state = {editMode : false};
  }

  handleChange(event) {
    this.props.onChange({index: this.props.index, value:event.target.value});
  }

  removeMesure() {
    this.props.onRemove(this.props.index);
  }


  toggleEdit() {
    this.setState({editMode: !this.state.editMode});
  }

  render() {
    if (this.state.editMode)
    return (<div className="grilleItem">
      <input type="text" value={this.props.mesure} onChange={this.handleChange} onBlur={this.toggleEdit}/>
      <Glyphicon glyph="remove-sign" onClick={this.removeMesure}/>
      </div>);
    else {
      var chords = this.props.mesure.split(' ');
      return (<div className="grilleItem" onClick={this.toggleEdit}>
      {chords.map(function(item, idx) {
        return (<div className="grilleItemChord" key={idx}>{item}</div>)
      })}

    </div>);

    }

  }
}

/*GrilleEdit.propTypes = {
  mesures : React.PropTypes.object,
}*/


export default GrilleItem;
