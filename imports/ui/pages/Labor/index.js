import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Shoppes } from '/imports/api/shoppes';
import Loading from '/imports/ui/common/Loading';
import { Grid, Container, Header } from 'semantic-ui-react'
import LaborTable from './LaborTable';

const _ = lodash

class Labor extends Component {
   constructor(props){
      super(props);
   }

   render(){
      const isLoading = this.props.loading;

      if (isLoading) {
         return <Loading />;
      }

      const { _id, labor } = this.props.shoppe;

      return (
         <div className="contentWrapper">
            <Header as="h1">
               Labor Management
            </Header>

            <LaborTable labor={labor} shoppeId={_id}/>
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

}, Labor);
