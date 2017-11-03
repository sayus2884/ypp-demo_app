import { Meteor } from 'meteor/meteor';
import { Taxes } from './collection';

if (Meteor.isServer) {
   Meteor.publish('taxes', function(ocean) {
      return Taxes.find({ocean});
   });
}
