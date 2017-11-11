import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Table, Header, Input } from 'semantic-ui-react'
import { calculateRevenue, calculateProfit } from '/imports/helpers';
import { setCommodity } from '/imports/actions';

const _ = lodash;

class Product extends Component {

   constructor(props){
      super(props);

      this.state = props.product;
      // this._handleInputChange = props._handleInputChange.bind(this);
   }

   render(){
      const { product } = this.props;
      const { name } = product;

      return(
         <Table.Row>
            <Table.Cell>
               <Header as="h4">
                  <Header.Content>
                     {_.startCase(name)}
                  </Header.Content>
               </Header>
            </Table.Cell>

            <Table.Cell><Input type="text" pattern="[0-9]*" fluid name="onHand"/></Table.Cell>
            <Table.Cell>calculate revenue</Table.Cell>
            <Table.Cell>calculate profit</Table.Cell>

         </Table.Row>
      )
   }
}

const mapDispatchToProp = dispatch => {
   return {
      _handleInputChange(event, { name, value }) {
         const { shoppeId, index } = this.state;
         const data = { [name]: Number(value) || 0 };


         this.setState(data, () =>{
             Meteor.call('shoppes.updateCommodity', this.props.shoppeId, this.state)
          });

      },
   }
}

export default connect( state => {
   const { allShoppes, currentShoppe } = state;
   const { commodities, labor, _id } = allShoppes[currentShoppe];

   return {
      labor,
      commodities,
      shoppeId: _id
   };

} )(Product);
