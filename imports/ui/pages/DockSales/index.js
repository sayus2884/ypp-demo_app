import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Shoppes } from '/imports/api/shoppes';
import { Taxes } from '/imports/api/taxes';
import { Container, Header, Grid } from 'semantic-ui-react'
import Loading from '/imports/ui/common/Loading';
import CommoditiesTable from './CommoditiesTable';

const _ = lodash;

class DockSales extends Component {

   render(){
      const isLoading = this.props.loading;

      if (isLoading) {
         return <Loading />;
      }

      return(
         <div className="contentWrapper">
            <Header as="h1">
               Dock Sales
            </Header>
            <CommoditiesTable/>
         </div>
      );
   }
}

// Inject necessary data that you want to retrieve from store
export default connect( state => {
   const { loading } = state;

   return {
      loading
   };
})(DockSales);
