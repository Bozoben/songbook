import GrilleItem from './GrilleItem';
import GrilleLine from './GrilleLine';
import {transposeMesure} from '../../../utils/chord-utils';
import {Button,Glyphicon} from 'react-bootstrap';
import './GrilleEdit.css';

class GrilleEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lines: this.props.grid || []};
    this.addLine = this.addLine.bind(this);
    this.changeLine = this.changeLine.bind(this);
    this.transpose = this.transpose.bind(this);
    this.transposeUp = this.transposeUp.bind(this);
    this.transposeDown = this.transposeDown.bind(this);
  }

  addLine() {
    var newLines = this.state.lines;
    newLines.push( {title:"",mesures:[""]});
    this.setState({lines : newLines});
  }

  changeLine(line) {
    console.log("change line ! ....", line);
    var newLines = this.state.lines;
    newLines[line.index] = line.value;
    this.setState({lines : newLines});
  }

  transpose(value) {
    var newLines = this.state.lines.map((line) => {
      var newMesures = line.mesures.map((mesure) => { return transposeMesure(mesure,value)});
      return ({title:line.title, mesures:newMesures});
    });
    this.setState({lines : newLines});
  }

  transposeUp() {
    this.transpose(1);
  }

  transposeDown() {
    this.transpose(-1);
  }

  render() {
    return (<div className="grilleEdit"><legend>Grille</legend>
    <Button onClick={this.transposeDown} bsStyle="primary" bsSize="small">
    <Glyphicon glyph="chevron-left"/> - 1/2 ton</Button>{' '}
    <Button onClick={this.transposeUp} bsStyle="primary" bsSize="small">
    <Glyphicon glyph="chevron-right"/> + 1/2 ton</Button>
      {this.state.lines.map(function(item,idx){
      return (
        <GrilleLine key={idx} line={item} index={idx} onChange={this.changeLine}/>
      )}
    .bind(this))}
    <Button onClick={this.addLine} bsStyle="primary" bsSize="small">
    <Glyphicon glyph="plus"/>Ajouter une ligne</Button>
      </div>)
  }
}

/*GrilleEdit.propTypes = {
  mesures : React.PropTypes.object,
}*/


export default GrilleEdit;
