import React from 'react';
import {Glyphicon, Nav,Navbar, NavItem} from 'react-bootstrap/lib';


import 'bootstrap/dist/css/bootstrap.min.css';

import './app.scss'
export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="/">My Smart SongBook</a>{' '}<Glyphicon glyph="music"/>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}
