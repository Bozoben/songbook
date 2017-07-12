import 'whatwg-fetch';
// Actions associées au reducer songs

// Load toutes les SONGs (et sequences)
export const LOAD_SONGS = 'LOAD_SONGS';
export const SELECT_SONG = 'SELECT_SONG';
// CUD sur les SONGs
export const ADD_SONG = 'ADD_SONG';
export const UPDATE_SONG = 'UPDATE_SONG';
export const DELETE_SONG = 'DELETE_SONG';


export function loadSongs(data) {
  return {type: LOAD_SONGS, data};
}

export function addSong(item) {
  return {type: ADD_SONG, item};
}
export function selectSong(id) {
  return {type: SELECT_SONG, id};
}
export function updateSONG(item) {
  return {type: UPDATE_SONG, item};
}
export function deleteSONG(item) {
  return {type: DELETE_SONG, item};
}

export function updateSequence(idSONG, sequence) {
  return {type: UPDATE_SEQUENCE, idSONG, sequence};
}


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
  }
}

export function fetchSongs() {
  return function (dispatch) {
    return fetch(`/api/songs`,{
                headers: {'Content-Type': 'application/json'}
              }).then(response => checkStatus(response))
              .then(response => response.json())
              .then(json => dispatch(loadSongs(json)))
              .catch((err) => {
                console.log(err);
              });
  }
}

export function addSequence(data) {
  return function (dispatch) {
    var jsondata =JSON.stringify(data) ;
    console.log("JSON data", data, jsondata);
    return fetch(`/api/sequence`,{
          headers: {'Content-Type': 'application/json'},
          method : 'POST',
          body : jsondata
              }).then(response => checkStatus(response))
              .then(response => dispatch(fetchSongs()))
              .catch((err) => {
                console.log(err);
              });
  }
}

export function deleteSequence(idsequence) {
  return function (dispatch) {
    var jsondata =JSON.stringify({id:idsequence}) ;
    console.log("JSON data",jsondata);
    return fetch(`/api/sequence/delete`,{
          headers: {'Content-Type': 'application/json'},
          method : 'POST',
          body : jsondata
              }).then(response => checkStatus(response))
              .then(response => dispatch(fetchSongs()))
              .catch((err) => {
                console.log(err);
              });
  }
}
