import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Shoppes } from './collection';

const _ = lodash;

Meteor.methods({

   'shoppes.createShoppe' (shoppeDetails){
      if (!Meteor.userId()) {
         throw new Meteor.Error('not-authorized');
      }

      Shoppes.insert(shoppeDetails);
   },

   'shoppes.updateCommodity' (_id, commodity){

      if (!Meteor.userId()) {
         throw new Meteor.Error('not-authorized');
      }

      Shoppes.update({ _id, 'commodities.name': commodity.name }, {
         $set: { 'commodities.$': commodity }
      });
   },

   'shoppes.updateLabor' (_id, labor){

      if (!Meteor.userId()) {
         throw new Meteor.Error('not-authorized');
      }

      Shoppes.update({ _id, 'labor.name': labor.name }, {
         $set: { 'labor.$': labor }
      });
   },
});
