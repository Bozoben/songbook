export const EXECUTE_LOGIN = 'EXECUTE_LOGIN';

//import api from './api';

import { push } from 'react-router-redux'

export function loginUserSuccess(payload) {
  sessionStorage.setItem('token', payload);
  return {type: 'LOGIN_USER', payload}
}

export function logoutUser(payload) {
  sessionStorage.removeItem('token');
   return {type: 'LOGOUT_USER', payload}
}

export function loginFailure(payload) {
  sessionStorage.removeItem('token');
  return {type: 'LOGIN_FAILURE', payload}
}

export function executeLogin(username, password, nextUrl) {
  return function(dispatch){
    var jsondata = JSON.stringify({username: username, password: password}) ;
    return fetch("/api/login", {
      method : 'POST',
      body : jsondata
    })
    .then(_checkStatus)
    .then(response => _getAuthToken(response, dispatch, nextUrl))
    .catch((e) => dispatch(loginFailure("Vous n'êtes pas autorisé à accéder à l'application.", e.message)))
  }
}

function _getAuthToken(response, dispatch, nextUrl){
  try{
    const token = response.headers.get('x-auth-token');
    dispatch(loginUserSuccess(token));
    dispatch(push(nextUrl));
  }catch(e){
    dispatch(loginFailure("Erreur d'interpretation du login."));
  }
}

function _checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const formatedResp = `Status ${response.status} : ${response.statusText} - URL : ${response.url}`;
    var error = new Error(formatedResp)
    error.response = response
    throw error
  }
}
