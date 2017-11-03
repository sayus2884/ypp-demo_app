import { Meteor } from 'meteor/meteor';
import { Dubloons } from './collection';

if (Meteor.isServer) {
   // Meteor.publish('orders', function({establishmentId, createdToday, createdAt, asc = false }) {
   //
   //    let selector = {};
   //
   //    if (establishmentId) {
   //       selector.establishmentId = establishmentId;
   //    }
   //
   //    if (createdAt) {
   //       selector.createdAt = createdAt;
   //    }else if (createdToday) {
   //       selector.createdAt = { $gt: new Date( moment().startOf('day') ) }
   //    }
   //
   //    return Dubloons.find( selector, {
   //       sort: { createdAt: asc ? 1 : -1 }
   //    });
   // });
}
