import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Table, Header } from 'semantic-ui-react'
import LaborItem from './LaborItem';

const _ = lodash;

class LaborTable extends Component {

   render(){

      return(
         <Table celled striped compact>
            <Table.Header>
               <Table.Row>
                  <Table.HeaderCell>Type</Table.HeaderCell>
                  <Table.HeaderCell>Employee Wage</Table.HeaderCell>
                  <Table.HeaderCell>Production Cost</Table.HeaderCell>
               </Table.Row>
            </Table.Header>

            <Table.Body>
               {this.renderLaborItem()}
            </Table.Body>
         </Table>
      )
   }

   renderLaborItem(){
      const { labor, shoppeId } = this.props;

      return labor.map((laborItem) => <LaborItem key={laborItem.name} labor={laborItem} shoppeId={shoppeId}/>);
   }
}

export default connect((state) => {
   const { allShoppes, currentShoppe } = state;
   const { commodities, labor, _id } = allShoppes[currentShoppe];

   return {
      labor,
      shoppeId: _id
   };

})(LaborTable);
