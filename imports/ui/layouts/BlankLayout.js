import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Container } from 'semantic-ui-react'

import TopNavbar from '../common/TopNavbar';
import Footer from '../common/Footer';

const BlankLayout = ({ component: Component, ...rest }) => {
   return (
      <Route exact {...rest} render={ matchProps => Meteor.userId() ? (
         <div>
            <Container style={{ height: '100%', paddingTop: '7em' }}>
               <Component {...matchProps} />
            </Container>
         </div>
      ) : <Redirect to={{pathname: '/', state: {from: matchProps.location}}} />}
      />
   );
};

export default BlankLayout;
