import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
/* Redux stuff */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import {songs} from './reducers/songs-reducer';
import { routerReducer } from 'react-router-redux';
import {auth} from './reducers/auth';
import {loginUserSuccess} from './actions/auth';
import {fetchSongs} from './reducers/songs-actions';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
// Login
import { requireAuthentication } from './components/utils/AuthenticatedComponent';
import LoginView from './components/LoginView';

// Composants UI
import App from './components/app';
import VueSongs from './components/VueSongs';
import DetailSong from './components/DetailSong';

const reducers = combineReducers({
  songs,
  auth,
  routing: routerReducer
  }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware,
  routerMiddleware(browserHistory))
));
const token = sessionStorage.getItem('token');
// Il peut arriver que le token soit stocké en tant que string "undefined" et là c'est le drame, d'où test
if (token && token !== "undefined") {
  store.dispatch(loginUserSuccess(token))
}

// Init donnees
store.dispatch(fetchSongs());

render(<Provider store={store}><Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRedirect to='/songs'/>
    <Route path="/songs" component={requireAuthentication(VueSongs)}/>
    <Route path='/songs/:id' component={requireAuthentication(DetailSong)}/>
    <Route path="/login" component={LoginView} />
  </Route>
</Router></Provider>, document.getElementById('root'));
