import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Container, Header } from 'semantic-ui-react'

const _ = lodash

class ReleaseNotes extends Component {

   render(){
      return (
         <div>
            <Container>
               <Header as="h1">
                  YPP Shoppe Analytics (Alpha)
                  <Header.Subheader>
                     This is a YPP Shoppe Analytics tool which helps you understand how much you are gaining or losing and empowers you to make the right decisions to handle yer stall.
                  </Header.Subheader>
               </Header>
            </Container>
         </div>
      );
   }
}

export default ReleaseNotes;
