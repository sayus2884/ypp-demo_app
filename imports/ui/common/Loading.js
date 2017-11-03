import React, { Component } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';


class Footer extends Component {
   render(){
      return (
         <Grid
            stackable
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'>
            <Grid.Row columns={1}>

               <Grid.Column>
                  <Container>
                     <Header as="h3">Loading Data...</Header>
                  </Container>
               </Grid.Column>

            </Grid.Row>
         </Grid>
      )
   }
}

export default Footer
