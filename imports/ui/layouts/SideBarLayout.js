import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

import TopNavbar from '../common/TopNavbar';
import SideBar from '../common/SideBar';
import Footer from '../common/Footer';

const _ = lodash;

const style = {
   marginLeft: '115px',
   marginRight: '10px',
   minWidth: '550px',
};

class SideBarLayout extends Component {
   render(){
      return (
         <div style={style}>
            {this.renderTopNavbar()}
            <SideBar />
            <Container style={this.renderCss()}>
               {this.props.content}
            </Container>
         </div>
      );

   }

   renderTopNavbar(){
      return !this.props.topNavbar ? <TopNavbar /> : this.props.topNavbar
   }

   renderCss(){
      let css = { height: '100%' };
      return !this.props.topNavbar ? _.assign({}, css, {paddingTop: '4em'}) : css;
   }
}

export default SideBarLayout;
