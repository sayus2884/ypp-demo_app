import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTracker } from 'meteor/react-meteor-data';
import { loadData, setUser, setOwnerShoppes, setTaxChart  } from '/imports/actions';

import { Shoppes } from '/imports/api/shoppes';
import { Taxes } from '/imports/api/taxes';

const style = {
   marginLeft: '115px',
   marginRight: '10px',
   minWidth: '550px',
};

class LoadData extends Component {
   render(){
      return '';
   }
}

const LoadDataWithTracker = withTracker( ({ loadData, setData }) => {

   // load app data
   const taxSubscription = Meteor.subscribe('taxes', 'obsidian');
   const shoppeSubscription = Meteor.subscribe('shoppes', { owner: Meteor.userId() });
   const loading = !shoppeSubscription.ready() || !taxSubscription.ready() || Meteor.loggingIn();

   loadData(loading);

   if (!loading) {
      setData();
   }

   return { loading };
})(LoadData);


const mapDispatchToProp = dispatch => {
   return {
      loadData(loading) {
         dispatch(loadData(loading));
      },

      setData(){
         dispatch(setUser());
         dispatch(setOwnerShoppes());
         dispatch(setTaxChart());
      }
   }
}

export default connect(() => {return {}}, mapDispatchToProp)(LoadDataWithTracker);
