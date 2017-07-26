import {connect} from 'react-redux';
import { hashHistory } from 'react-router';
import { selectSong} from '../../reducers/songs-actions';
import VueSongs from './VueSongs';

const mapStateToProps = (state) => {
  const zeData = state.songs.songs;
  return {
    songs: Object.keys(zeData).map(contactId => zeData[contactId]),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectSong: (item) => {
      dispatch(selectSong(item.id));
      hashHistory.push('/songs/' + item.id);
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VueSongs);
