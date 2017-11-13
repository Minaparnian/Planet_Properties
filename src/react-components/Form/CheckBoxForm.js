import React, { Component } from 'react';


export default class CheckBoxForm extends Component {


  handleClick = () => {
    if (this.state.showBoxForm) {
      this.setState({showBoxForm: false});
    } else {
      this.setState({showBoxForm: true});
    }
  };
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

  render() {
    return(
      <section>
      <a href="#" onClick={this.handleClick} className="advancecheck">Advance Search</a>
        {
          this.state.showBoxForm? this.renderAdvanceSearch() : null
        }

      </section>

    );
  }

}
