import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Table, Header, Input } from 'semantic-ui-react'
import { calculateRevenue, calculateProfit } from '/imports/helpers';

const _ = lodash;

class Commodity extends Component {

   constructor(props){
      super(props);

      this.state = props.commodity;
      this.handleInputChange = this.handleInputChange.bind(this);
   }

   handleInputChange(event, { name, value }){
      const data = { [name]: Number(value) };
      this.setState(data, () => Meteor.call('shoppes.updateCommodity', this.props.shoppeId, this.state));
   }

   render(){
      const { name, onHand, buyPrice, sellPrice, cost } = this.state;

      return(
         <Table.Row>
            <Table.Cell>
               <Header as="h4">
                  <Header.Content>
                     {_.startCase(name)}
                  </Header.Content>
               </Header>
            </Table.Cell>

            <Table.Cell><Input type="number" min="0" fluid value={onHand} onChange={this.handleInputChange} name="onHand"/></Table.Cell>
            <Table.Cell><Input type="number" min="0" fluid value={buyPrice} onChange={this.handleInputChange} name="buyPrice"/></Table.Cell>
            <Table.Cell><Input type="number" min="0" fluid value={sellPrice} onChange={this.handleInputChange} name="sellPrice"/></Table.Cell>
            <Table.Cell><Input type="number" min="0" fluid value={cost} onChange={this.handleInputChange} name="cost"/></Table.Cell>
            <Table.Cell>{calculateRevenue(this.state)}</Table.Cell>
            <Table.Cell>{calculateProfit(name, this.state, this.props.labor, this.props.commodities)}</Table.Cell>
         </Table.Row>
      )
   }
}

export default Commodity;
