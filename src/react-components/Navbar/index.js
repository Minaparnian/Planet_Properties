import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return(
      <ul className="navigation">
        <li className="left"><a href="#">Planet Properties</a></li>
        <li className="right"><a href="#">SignUp</a></li>
        <li className="right"><a href="#">SignIn</a></li>
      </ul>
    );
  }
}
