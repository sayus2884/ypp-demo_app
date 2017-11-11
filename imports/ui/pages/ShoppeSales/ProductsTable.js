import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Table, Header } from 'semantic-ui-react'
import Product from './Product';

const _ = lodash;

class ProductsTable extends Component {

   render(){
      return(
         <Table celled striped compact>
            <Table.Header>
               <Table.Row>
                  <Table.HeaderCell>Product</Table.HeaderCell>
                  <Table.HeaderCell>Price Adjustment</Table.HeaderCell>
                  <Table.HeaderCell>Revenue</Table.HeaderCell>
                  <Table.HeaderCell>Profit</Table.HeaderCell>
               </Table.Row>
            </Table.Header>

            <Table.Body>
               { this.renderProducts() }
            </Table.Body>
         </Table>
      )
   }

   renderProducts(){
      const { products } = this.props;

      return products.map((product, index) => <Product key={product.name} product={product} index={index}/>);
   }
}

export default connect((state) => {
   const { allShoppes, currentShoppe } = state;
   const { products } = allShoppes[currentShoppe];


   return {
      products
   };

})(ProductsTable);
