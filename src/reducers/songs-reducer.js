import {LOAD_SONGS, ADD_SONG, UPDATE_SONG, DELETE_SONG, ADD_SEQUENCE,
UPDATE_SEQUENCE, DELETE_SEQUENCE, SELECT_SONG} from './songs-actions';

const initialState = {
  songs: [],
  currentId: null,
  currentData : {}
}

export function songs(state = initialState, action) {
  switch (action.type) {
    case LOAD_SONGS:
      //return Object.assign({},state, {songs: action.data});
      var newData = Object.assign({},action.data);
      return {...state, songs: newData};
    case SELECT_SONG:
      return {...state, currentId: action.id, currentData : state.songs[action.id]};
    default:
    return state;
  }
}


export default { songs }
