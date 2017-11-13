import React, { Component } from 'react';


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

  renderAdvanceSearch() {
    return(

      <form>

         <ul>
           <li className="list-inline"><label>Planet type</label>
           <select type="select" className="select-box">
             <option>Rock</option>
             <option>Gas</option>
           </select></li>
           <li className="list-inline"><label>Price min</label>
           <select type="select" className="select-box">
             <option>Any</option>
             <option>10,000</option>
             <option>100,000</option>
             <option>1,000,000</option>
             <option>10,000,000</option>
             <option>100,000,000</option>
           </select></li>
           <li className="list-inline"><label>Price max</label>
           <select type="select" className="select-box">
             <option>Any</option>
             <option>10,000</option>
             <option>100,000</option>
             <option>1,000,000</option>
             <option>10,000,000</option>
             <option>100,000,000</option>
           </select></li>
           <li className="list-inline"><label>Water availability</label>
           <select type="select" className="select-box">
             <option>Yes</option>
             <option>No</option>
           </select></li>
         </ul>
       </form>

    );
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
             {this.renderAdvanceSearch()}

           </div>
         </div>
      </section>
    );
  }
}
