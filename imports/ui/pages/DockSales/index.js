import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Shoppes } from '/imports/api/shoppes';
import { Container, Header, Grid } from 'semantic-ui-react'
import Loading from '/imports/ui/common/Loading';
import CommoditiesTable from './CommoditiesTable';

const _ = lodash;

class Products extends Component {

   render(){
      const isLoading = this.props.loading;

      if (isLoading) {
         return <Loading />;
      }

      const { _id, commodities, labor, name } = this.props.shoppe;

      return(
         <div className="contentWrapper">
            <Header as="h1">
               Dock Sales
            </Header>
            <CommoditiesTable commodities={commodities} labor={labor} shoppeId={_id}/>
         </div>
      );
   }
}

export default createContainer(() => {

   const taxSubscription = Meteor.subscribe('taxes', 'obsidian');
   const shoppeSubscription = Meteor.subscribe('shoppes', { owner: Meteor.userId() });
   const loading = !shoppeSubscription.ready() || !taxSubscription.ready();
   const shoppe = Shoppes.findOne();
   const taxChart = Shoppes.findOne();

   return { shoppe, loading }

}, Products);
