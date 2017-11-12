import React, { Component } from 'react';

export default class Popup extends Component {
   renderPopupContent() {
     return(
       <section className="popup">
         <section className="popup-wrap">
           <img src="/img/close1.png" onClick={this.props.hidePopup}/>
         </section>
         <section className="popup-content">
           {this.props.children}
         </section>


       </section>

     );
   }

  render(){
    return(
      <section>
        {
          this.props.status? this.renderPopupContent() : null
        }
      </section>
    );
  }
}