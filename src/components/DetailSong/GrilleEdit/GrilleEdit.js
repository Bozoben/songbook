import GrilleItem from './GrilleItem';
import GrilleLine from './GrilleLine';
import {Glyphicon} from 'react-bootstrap';
import './GrilleEdit.css';

class GrilleEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lines: []};
    this.addLine = this.addLine.bind(this);
    this.changeLine = this.changeLine.bind(this);
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

  render() {
    return (<div className="grilleEdit">
    <a href="#" onClick={this.addLine}><Glyphicon glyph="plus"/>Ajouter une ligne</a>
      {this.state.lines.map(function(item,idx){
      return (
        <GrilleLine key={idx} line={item} index={idx} onChange={this.changeLine}/>
      )}
    .bind(this))}
      </div>)
  }
}

/*GrilleEdit.propTypes = {
  mesures : React.PropTypes.object,
}*/


export default GrilleEdit;
