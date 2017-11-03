import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Container, Segment, Grid, Header } from 'semantic-ui-react'
import  ShoppeCreationForm from './ShoppeCreationForm';

const _ = lodash

class ShoppeCreation extends Component {
   constructor(props){
      super(props);
   }

   render(){
      return (
         <Container>
            <Grid
               textAlign='center'>

               <Segment
                  textAlign='center'
                  size="small"
                  padded
                  style={{ maxWidth: 450 }}>
                  <Header as="h1">
                     Good Day!
                     <Header.Subheader>
                        For starters, let's make a shoppe for you to work with.
                     </Header.Subheader>
                  </Header>

                  <ShoppeCreationForm />
               </Segment>
            </Grid>
         </Container>
      );
   }
}

export default ShoppeCreation;
