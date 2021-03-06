import React, { Component } from 'react';

export default class Popup extends Component {
   renderPopupContent() {
     return(
       <section className="popup">
         <section className="popup-wrap" id="popup-wrap-planet">
           <img src="/img/close1.png" onClick={this.props.hidePopup}/>
         </section>
         <section className={"popup-content " + this.props.style}>
           <section>{this.props.children}</section>
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
