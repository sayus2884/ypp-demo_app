import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Grid, Container, Header } from 'semantic-ui-react'
import { SEO } from '/imports/api/seo';

import Details from './Details';
import SignIn from './SignIn';

const _ = lodash

class Home extends Component {
   constructor(props){
      super(props);
   }

   render(){
      return (
         <div style={{height: '100%'}}>
            <Grid
               stackable
               textAlign='center'
               style={{ height: '100%' }}
               verticalAlign='middle'>
               <Grid.Row columns={2}>

                  <Grid.Column>
                     <Details />
                  </Grid.Column>

                  <Grid.Column>
                     <SignIn />
                  </Grid.Column>

               </Grid.Row>
            </Grid>
            <div className="background">
            </div>
         </div>
      );
   }
}

export default createContainer(() => {

   SEO.set({
      title: `Sign up`,
      meta: {
         'property="og:title"': `Sign In`,
         'property="og:description"': `Save your name, address, and number so you don't have to rewrite everything when you checkout.`,
         'property="og:image"': Meteor.absoluteUrl() + 'img/default.png',
         'property="og:image:width"': '1200',
         'property="og:image:height"': '630',
      }
   });

   return {};

}, Home);
