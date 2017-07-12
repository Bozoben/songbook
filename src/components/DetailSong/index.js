import {connect} from 'react-redux';
//import {addSequence, updateSeance, deleteSequence, fetchMatieres} from '../../reducers/matieres-actions';
import DetailSong from './DetailSong';

const mapStateToProps = (state) => {
  return {
    song: state.songs.songs[state.songs.currentId],
    songs: state.songs,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
/*     dispatch(addSequence(data));
    },
    updateSeance: (data) => {
      dispatch(updateSeance(data));
    },
    deleteSequence: (idSequence) => {
      dispatch(deleteSequence(idSequence));
    }*/

  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DetailSong);
