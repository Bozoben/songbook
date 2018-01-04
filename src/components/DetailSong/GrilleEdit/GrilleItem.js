import './GrilleItem.css';

class GrilleItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.state = {editMode : false};
  }

  handleChange(event) {
    this.props.onChange({index: this.props.index, value:event.target.value});
  }

  toggleEdit() {
    this.setState({editMode: !this.state.editMode});
  }

  render() {
    if (this.state.editMode)
    return (<div className="grilleItem">
      <input type="text" value={this.props.mesure} onChange={this.handleChange} onBlur={this.toggleEdit}/>
      </div>);
    else
    return (<div className="grilleItem" onClick={this.toggleEdit}>
    {this.props.mesure}
  </div>)
  }
}

/*GrilleEdit.propTypes = {
  mesures : React.PropTypes.object,
}*/


export default GrilleItem;
