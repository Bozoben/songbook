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
      var newData = Object.assign({},action.data);
      return {...state, songs: newData};
    case SELECT_SONG:
      return {...state, currentId: action.id, currentData : state.songs[action.id]};
    case ADD_SONG:
      //FIXME : debouchonner
      return state;
    case UPDATE_SONG:
      // FIXME : debouchonner
      var song = action.item;
      var newSongs = state.songs;
      newSongs[song.id] = song;
      return {...state, songs: newSongs, currentId: song.id, currentData : newSongs[song.id]};
    default:
    return state;
  }
}


export default { songs }
