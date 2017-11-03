import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Grid, Container, Header } from 'semantic-ui-react'

const _ = lodash

class ShoppeSales extends Component {
   constructor(props){
      super(props);
   }

   render(){
      return (
         <Grid
            stackable
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'>
            <Grid.Row columns={2}>

               <Grid.Column>
                  <Header>Coming Soon!</Header>
               </Grid.Column>
            </Grid.Row>
         </Grid>
      );
   }
}

export default ShoppeSales;
