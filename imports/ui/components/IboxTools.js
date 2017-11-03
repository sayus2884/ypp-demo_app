import React, { Component } from 'react';

class IboxTools extends Component {
   render(){
      return(
         <div className="ibox-tools">
             <a className="collapse-link" onClick={this.collapseLink.bind(this)}>
                 <i className="fa fa-chevron-up"></i>
             </a>
         </div>
      );
   }

   collapseLink(event){
      event.preventDefault()

      var element = $(event.target);
      var ibox = element.closest('div.ibox');
      var button = element.closest("i");
      var content = ibox.find('div.ibox-content');
      content.slideToggle(200);
      button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
      ibox.toggleClass('').toggleClass('border-bottom');
      setTimeout(function () {
          ibox.resize();
          ibox.find('[id^=map-]').resize();
      }, 50);
   }
}

export default IboxTools;
