import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Route, Redirect } from 'react-router';
import { Container } from 'semantic-ui-react'
import { createDrowdownOptions } from '/imports/helpers/array';

import TopNavbar from '../common/TopNavbar';
import SideBar from '../common/SideBar';
import Footer from '../common/Footer';

const _ = lodash

const style = {
   marginLeft: '115px',
   marginRight: '10px',
   minWidth: '550px',
};

class AppLayout extends Component {
   render(){
      const { component: Component, ...rest } = this.props;
      const { name, shoppes, currentShoppe } = rest

      return (
         <Route exact {...rest} render={ matchProps => Meteor.userId() ? (
            <div style={style}>
               <TopNavbar style={{ paddingLeft: '115px' }} />
               <SideBar activeItem={name}/>
               <Container style={{ height: '100%', paddingTop: '4em' }}>
                  <Component {...matchProps} />
               </Container>
               <div className="background"></div>

            </div>
         ) : <Redirect to={{pathname: '/', state: {from: matchProps.location}}} />}
         />
      );
   }
}

export default withRouter(AppLayout);
