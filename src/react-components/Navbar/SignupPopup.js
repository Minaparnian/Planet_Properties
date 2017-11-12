import React, { Component } from 'react';
import Popup from './Popup';

export default class LoginPopup extends Component {
  constructor( props ) {
    super( props );
    this.state = {query: ''}
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  _handleSubmit(e) {
    e.preventDefault();
    const query = this.state.query;
  }
  render() {
    return(
      <Popup {...this.props} classname="login-popup">



         <form action="/action_page.php" onSubmit={this._handleSubmit}>
         <section>
           <h1 className="signin-title">Sign up in seconds</h1>
           <button className="login-facebook">Signup with facebook</button>
           <button className="login-Google">Signup with Google</button>
         </section>


            <div className="container">
              <label><b>Username</b></label>
              <input type="text" placeholder="Enter Username" value={this.state.query} onChange={this._handleChange}/>

              <label><b>Password</b></label>
              <input type="password" placeholder="Enter Password" value={this.state.query} onChange={this._handleChange}/>

              <label><b>Password confirmation</b></label>
              <input type="password" placeholder="Enter Password Confirmation" value={this.state.query} onChange={this._handleChange}/>

              <button type="submit">Login</button>
            </div>
            <h1 className="permission-title">We promise to never post anything without your permission</h1>


          </form>


      </Popup>
    );

  }

}
