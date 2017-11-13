import React, { Component } from 'react';
import CheckBoxForm from './CheckBoxForm';


export default class Form extends Component {

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


  renderForm() {
    return(
      <form onSubmit={this._handleSubmit} className="flex-form">

         <input type="search" placeholder="Search by name of planet" value={this.state.query} onChange={this._handleChange} />
         <input type="submit" value="Search" />
      </form>

    );
  }

  render() {
    return(
      <section>
        <div className="cover">
          <div className="main-title-container">
             <h1 className="main-title">Find your perfect planet</h1>
          </div>
          <div className="form-box">
             {this.renderForm()}
            <CheckBoxForm/>

           </div>
         </div>
      </section>
    );
  }
}
