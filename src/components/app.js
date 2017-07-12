import React from 'react';
import {Nav,Navbar, NavItem} from 'react-bootstrap/lib';


import 'bootstrap/dist/css/bootstrap.min.css';

import './app.scss'
export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar >
            <Navbar.Header>
                <Navbar.Brand>
                    SongBook
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}
