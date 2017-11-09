import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
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

      return (
         <div className="contentWrapper">
            <Header as="h1">
               Labor Management
            </Header>

            <LaborTable/>
         </div>
      );
   }
}

export default connect( state => {
   const { loading } = state;

   return {
      loading
   };
})(Labor);
