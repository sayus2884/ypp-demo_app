import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Table, Header } from 'semantic-ui-react'
import Commodity from './Commodity';

const _ = lodash;

class CommoditiesTable extends Component {

   render(){
      return(
         <Table celled striped compact>
            <Table.Header>
               <Table.Row>
                  <Table.HeaderCell>Commodity</Table.HeaderCell>
                  <Table.HeaderCell>On Hand</Table.HeaderCell>
                  <Table.HeaderCell>Buy Price</Table.HeaderCell>
                  <Table.HeaderCell>Sell Price</Table.HeaderCell>
                  <Table.HeaderCell>Use Cost</Table.HeaderCell>
                  <Table.HeaderCell>Revenue</Table.HeaderCell>
                  <Table.HeaderCell>Profit</Table.HeaderCell>
               </Table.Row>
            </Table.Header>

            <Table.Body>
               {this.renderCommodities()}
            </Table.Body>
         </Table>
      )
   }

   renderCommodities(){
      const { commodities } = this.props;

      return commodities.map((commodity, index) => <Commodity key={commodity.name} commodity={commodity} index={index}/>);
   }
}

export default connect((state) => {
   const { allShoppes, currentShoppe } = state;
   const { commodities } = allShoppes[currentShoppe];


   return {
      commodities
   };

})(CommoditiesTable);
