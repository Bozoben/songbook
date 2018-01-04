import GrilleItem from './GrilleItem';
import {Glyphicon} from 'react-bootstrap';
import './GrilleLine.css';

class GrilleLine extends React.Component {
  constructor(props) {
    super(props);
    this.changeMesure = this.changeMesure.bind(this);
    this.addMesure = this.addMesure.bind(this);
    this.removeMesure = this.removeMesure.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
  }

  addMesure() {
    var newLine = this.props.line;
    newLine.mesures.push("");
    this.props.onChange(newLine);
  }

  removeMesure(idx) {
    var newLine = this.props.line;
    newLine.mesures.splice(idx,1);
    this.props.onChange(newLine);
  }

  changeMesure(mesure) {
    //console.log("change mesure ....", mesure);
    var newLine = this.props.line;
    newLine.mesures[mesure.index] = mesure.value;
    this.props.onChange(newLine);
  }

  changeTitle(event) {
    var newLine = this.props.line;
    newLine.title = event.target.value;
    this.props.onChange(newLine);
  }

  render() {
    return (<div><input type="text" placeholder="Titre" bsSize="small" onChange={this.changeTitle} value={this.props.line.title}/>
<div className="grilleLine">
            {this.props.line.mesures.map(function(item,idx){
      return (
        <GrilleItem key={idx} mesure={item} index={idx} onChange={this.changeMesure} onRemove={this.removeMesure}/>
      )}
    .bind(this))}
      <Glyphicon glyph="plus-sign" onClick={this.addMesure}/></div>
    </div>)
  }
}

/*GrilleEdit.propTypes = {
  mesures : React.PropTypes.object,
}*/


export default GrilleLine;
