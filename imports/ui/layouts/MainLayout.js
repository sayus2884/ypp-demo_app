import React, { Component } from 'react';

import TopNavbar from '../common/TopNavbar';
import Footer from '../common/Footer';

class MainLayout extends Component {
   render(){
      return (
         <div id="wrapper">

            <div id="page-wrapper">

               {this.renderTopNavbar()}
               <div id="page-content">{this.props.content}</div>

            </div>
         </div>
      );
   }

   renderTopNavbar(){
      return !this.props.topNavbar ? <TopNavbar /> : this.props.topNavbar
   }

   componentDidMount(){
      // Add special class for handel top navigation layout
      $('body').addClass('top-navigation');

      // Fix height of layout when resize, scroll and load
      $(window).bind("load resize scroll", function() {
         if(!$("body").hasClass('body-small')) {



            var navbarHeigh = $('nav.navbar-default').height();
            var wrapperHeigh = $('#page-wrapper').height();

            if(navbarHeigh > wrapperHeigh){
               $('#page-wrapper').css("min-height", navbarHeigh + "px");
            }

            if(navbarHeigh < wrapperHeigh){
               $('#page-wrapper').css("min-height", $(window).height()  + "px");
            }

            if ($('body').hasClass('fixed-nav')) {
               if (navbarHeigh > wrapperHeigh) {
                  $('#page-wrapper').css("min-height", navbarHeigh - 60 + "px");
               } else {
                  $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
               }
            }
         }
      });

      $( window ).resize();
   }

   componentWillUnmount(){
      // Remove special top navigation class
      $('body').removeClass('top-navigation');
   }
}

export default MainLayout;
