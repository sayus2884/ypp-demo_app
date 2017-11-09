import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Container, Header, Divider, Grid, List } from 'semantic-ui-react'

import ReleaseNotes from './ReleaseNotes';

const _ = lodash

const style={
   grid: { padding: '0 90px' }
}

class Details extends Component {

   render(){
      return (
         <Container>
            <Header as="h1">
               YPP Shoppe Analytics (Alpha)
               <Header.Subheader>
                  A YPP Shoppe Analytics tool that helps you understand how much you gain or lose and empowers you to make the right decisions to handle your stall.
               </Header.Subheader>
            </Header>

            <Header as="h2">
               Available Shoppes
            </Header>
            <Header as="h3">
               <Grid columns={2} style={style.grid}>

                  <Grid.Column>
                     {this.renderFirstList()}
                  </Grid.Column>

                  <Grid.Column>
                     {this.renderSecondList()}
                  </Grid.Column>

               </Grid>
            </Header>

            <Header as="h2">
               Available Oceans
            </Header>
            <Header as="h3">
               <Grid columns={2} style={style.grid}>
                  <Grid.Column>
                     {this.renderThirdList()}
                  </Grid.Column>
                  <Grid.Column>
                     {this.renderFourthList()}
                  </Grid.Column>
               </Grid>
            </Header>
         </Container>
      );
   }

   renderFirstList(){
      return (
         <List >
            <List.Item>
               <List.Icon name='checkmark' color="green"/>
               <List.Content>Iron Monger</List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='checkmark' color="grey"/>
               <List.Content>Distillery</List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='checkmark' color="grey"/>
               <List.Content>Shipyard</List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='checkmark' color="grey"/>
               <List.Content>Apothecary</List.Content>
            </List.Item>
         </List>
      );
   }

   renderSecondList(){
      return (
         <List>
            <List.Item>
               <List.Icon name='checkmark' color="grey"/>
               <List.Content>Weavery</List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='checkmark' color="grey"/>
               <List.Content>Tailor</List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='checkmark' color="grey"/>
               <List.Content>Furnisher</List.Content>
            </List.Item>
         </List>
      );
   }

   renderThirdList(){
      return (
         <List>
            <List.Item>
               <List.Icon name='checkmark' color="green"/>
               <List.Content>Obsidian</List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='checkmark' color="grey"/>
               <List.Content>Emerald</List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='checkmark' color="grey"/>
               <List.Content>Meridian</List.Content>
            </List.Item>
         </List>
      );
   }

   renderFourthList(){
      return (
         <List>
            <List.Item>
               <List.Icon name='checkmark' color="grey"/>
               <List.Content>Opal</List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='checkmark' color="grey"/>
               <List.Content>Jade</List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='checkmark' color="grey"/>
               <List.Content>Cerulean</List.Content>
            </List.Item>
         </List>
      );
   }
}

export default Details;
