import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Header } from 'semantic-ui-react'
import Loading from '/imports/ui/common/Loading';
import ProductsTable from './ProductsTable';

const _ = lodash

class ShoppeSales extends Component {
   constructor(props){
      super(props);
   }

   render(){
      const isLoading = this.props.loading;

      if (isLoading) {
         return <Loading />;
      }

      return (
         <div className="contentWrapper">
            <Header as="h1">
               Shoppe Sales
            </Header>
            <ProductsTable/>
         </div>
      );
   }
}

export default connect( state => {
   const { loading } = state;

   return {
      loading
   };
})(ShoppeSales);
