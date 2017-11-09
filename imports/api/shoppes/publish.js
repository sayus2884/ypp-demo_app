import { Meteor } from 'meteor/meteor';
import { Shoppes } from './collection';

if (Meteor.isServer) {
   Meteor.publish('shoppes', function({ _id, owner, ocean, island, createdAt, asc = false }) {

      if (!Meteor.userId()) {
         throw new Meteor.Error('not-authorized');
      }

      let selector = {};

      if (_id) {
         selector._id = _id;
      }

      if (owner) {
         selector.owner = owner;
      }

      if (ocean) {
         selector.ocean = ocean;
      }

      if (island) {
         selector.island = island;
      }

      return Shoppes.find( selector, {
         sort: { createdAt: asc ? 1 : -1 }
      });
   });
}
