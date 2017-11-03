import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

import TopNavbar from '../common/TopNavbar';
import Footer from '../common/Footer';

const _ = lodash;

class BlankLayout extends Component {
   render(){
      return (
         <div>
            {this.renderTopNavbar()}
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
      return !this.props.topNavbar ? _.assign({}, css, {paddingTop: '7em'}) : css;
   }
}

export default BlankLayout;
