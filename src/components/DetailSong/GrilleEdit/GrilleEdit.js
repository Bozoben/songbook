import GrilleItem from './GrilleItem';
import {Glyphicon} from 'react-bootstrap';
import './GrilleEdit.css';

class GrilleEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mesures: [""]};
    this.changeMesure = this.changeMesure.bind(this);
    this.addMesure = this.addMesure.bind(this);
  }

  addMesure() {
    var newMesures = this.state.mesures;
    newMesures.push("");
    this.setState({mesures : newMesures});
  }

  changeMesure(mesure) {
    //console.log("change mesure ....", mesure);
    var newMesures = this.state.mesures;
    newMesures[mesure.index] = mesure.value;
    this.setState({mesures : newMesures});
  }

  render() {
    return (<div className="grilleEdit">
      {this.state.mesures.map(function(item,idx){
      return (
        <GrilleItem key={idx} mesure={item} index={idx} onChange={this.changeMesure}/>
      )}
    .bind(this))}
      <Glyphicon glyph="plus-sign" onClick={this.addMesure}/></div>)
  }
}

/*GrilleEdit.propTypes = {
  mesures : React.PropTypes.object,
}*/


export default GrilleEdit;
