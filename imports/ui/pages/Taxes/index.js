import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

const _ = lodash;

class Taxes extends Component {

  render(){

    return(
      <div>
        <h2>Taxes List</h2>
      </div>
    )
  }
}

export default createContainer(() => {

   // const subscription = Meteor.subscribe('orders.customer', { customerId: Meteor.userId() });
   // const loading = !subscription.ready();
   // const orders = Orders.find().fetch();
   //
   // console.log(orders);
   //
   // return { orders, loading }

   return {};

}, Taxes);
