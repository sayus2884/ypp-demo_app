import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Table, Header, Input } from 'semantic-ui-react'
import { calculateRevenue, calculateProfit } from '/imports/helpers/calculations';

const _ = lodash;

class LaborItem extends Component {

   constructor(props){
      super(props);

      this.state = props.labor;
      this._handleInputChange = props._handleInputChange.bind(this);

   }

   _handleInputChange(event, { name, value }){
      const data = { [name]: Number(value) || 0 };
      this.setState(data, () => Meteor.call('shoppes.updateLabor', this.props.shoppeId, this.state));
   }

   render(){
      const { name, wage, cost } = this.props.labor;

      return(
         <Table.Row>
            <Table.Cell>
               <Header as="h4">
                  <Header.Content>
                     {_.startCase(name)}
                  </Header.Content>
               </Header>
            </Table.Cell>

            <Table.Cell><Input type="text" pattern="[0-9]*" fluid value={wage} onChange={this._handleInputChange} name="wage"/></Table.Cell>
            <Table.Cell><Input type="text" pattern="[0-9]*" fluid value={cost} onChange={this._handleInputChange} name="cost"/></Table.Cell>
         </Table.Row>
      )
   }
}

const mapDispatchToProp = dispatch => {
   return {
      _handleInputChange(event, { name, value }) {
         const data = { [name]: Number(value) || 0 };

         this.setState(data, () => Meteor.call('shoppes.updateLabor', this.props.shoppeId, this.state));

      },
   }
}

export default connect( state => ({}), mapDispatchToProp )(LaborItem);
