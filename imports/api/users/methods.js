import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Mongo } from 'meteor/mongo';

Meteor.methods({
   'users.updateProfile' (profile){

      if (!Meteor.userId()) {
         throw new Meteor.Error('not-authorized');
      }

      Meteor.users.update(Meteor.userId(), {
         $set: {
            profile: profile
         }
      });
   },

   'users.updateProfilePicture' (pictureUrl){

      if (!Meteor.userId()) {
         throw new Meteor.Error('not-authorized');
      }

      Meteor.users.update(Meteor.userId(), {
         $set: {
            'profile.picture': pictureUrl
         }
      });
   },
});
