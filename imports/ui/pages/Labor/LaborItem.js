import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Table, Header, Input } from 'semantic-ui-react'
import { calculateRevenue, calculateProfit } from '/imports/helpers/calculations';

const _ = lodash;

class LaborItem extends Component {

   constructor(props){
      super(props);

      this.state = props.labor;
      this.handleInputChange = this.handleInputChange.bind(this);

   }

   handleInputChange(event, { name, value }){
      const data = { [name]: Number(value) };
      this.setState(data, () => Meteor.call('shoppes.updateLabor', this.props.shoppeId, this.state));
   }

   render(){
      const { name, wage, cost } = this.state;

      return(
         <Table.Row>
            <Table.Cell>
               <Header as="h4">
                  <Header.Content>
                     {_.startCase(name)}
                  </Header.Content>
               </Header>
            </Table.Cell>

            <Table.Cell><Input type="number" fluid value={wage} onChange={this.handleInputChange} name="wage"/></Table.Cell>
            <Table.Cell><Input type="number" fluid value={cost} onChange={this.handleInputChange} name="cost"/></Table.Cell>
         </Table.Row>
      )
   }
}

export default LaborItem;
