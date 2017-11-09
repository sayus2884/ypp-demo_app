import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Table, Header, Input } from 'semantic-ui-react'
import { calculateRevenue, calculateProfit } from '/imports/helpers';
import { setCommodity } from '/imports/actions';

const _ = lodash;

class Commodity extends Component {

   constructor(props){
      super(props);

      this.state = props.commodity;
      this._handleInputChange = props._handleInputChange.bind(this);
   }

   render(){
      const { commodity, } = this.props;
      const { name, onHand, buyPrice, sellPrice, cost } = commodity;

      return(
         <Table.Row>
            <Table.Cell>
               <Header as="h4">
                  <Header.Content>
                     {_.startCase(name)}
                  </Header.Content>
               </Header>
            </Table.Cell>

            <Table.Cell><Input type="text" pattern="[0-9]*" fluid value={onHand} onChange={this._handleInputChange} name="onHand"/></Table.Cell>
            <Table.Cell><Input type="text" pattern="[0-9]*" min="0" fluid value={buyPrice} onChange={this._handleInputChange} name="buyPrice"/></Table.Cell>
            <Table.Cell><Input type="text" pattern="[0-9]*" min="0" fluid value={sellPrice} onChange={this._handleInputChange} name="sellPrice"/></Table.Cell>
            <Table.Cell><Input type="text" pattern="[0-9]*" min="0" fluid value={cost} onChange={this._handleInputChange} name="cost"/></Table.Cell>
            <Table.Cell>{calculateRevenue(commodity)}</Table.Cell>
            <Table.Cell>{calculateProfit(name, commodity, this.props.labor, this.props.commodities)}</Table.Cell>
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

}, mapDispatchToProp )(Commodity);
