import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Archipelagoes } from '/imports/api/archipelagoes';
import { Shoppes } from '/imports/api/shoppes';
import { Taxes } from '/imports/api/taxes';
import { IRON_MONGER, PRODUCTS } from '/imports/helpers';

const _ = lodash;

const createShoppe = (owner, name) => {
   let shoppes = Shoppes.find({owner}).fetch();

   if (shoppes.length === 0) {

      const shoppe = _.assign({}, {
         commodities: IRON_MONGER,
         products: PRODUCTS.IRON_MONGER,
         owner, name, createdAt: _.now(),
         ocean: 'obsidian', island: 'port venture', type: 'iron monger',
         labor: [
            { name: 'basic labor', wage: 50, cost: 55 },
            { name: 'skilled labor', wage: 65, cost: 75 },
            { name: 'expert labor', wage: 90, cost: 110 },
         ]
      })

      Shoppes.insert(shoppe, () => console.log(`Test shoppe created.`));
   }
};

const createUser = (userDetails) => {
   let user = Meteor.users.find({'emails.address': userDetails.email}).fetch();

   if (user.length === 0) {
      Accounts.createUser(userDetails);
      // NOTE: redundant logic
      const user = Meteor.users.findOne({'emails.address': userDetails.email});

      if (user) {
         createShoppe(user._id, `Caine's Iron Monger Stall` )
         console.log(`User ${user.id} is created: \n`, user);
      }
   }
}

const createTaxChart = (ocean, commodities) => {
   let taxCharts = Taxes.find({ocean}).fetch();

   if (taxCharts.length === 0) {
      const taxChart = _.assign({}, {ocean, commodities});
      Taxes.insert(taxChart, () => console.log(`${ocean} tax chart created.`));
   }
}

Meteor.startup(() => {

   const adminUser = {
      profile: {
         firstName: 'John',
         lastName:  'Doe',
         accountType: 'master',
      },
      email: 'admin@test.com',
      password: 'test'
   }

   const testUser = {
      profile: {
         firstName: 'John',
         lastName:  'Doe',
         accountType: 'regular',
      },
      email: 'test@test.com',
      password: 'ghughu'
   };

   const obsidianCommodityTaxes = [
      { name: 'iron', tax: 1.6 },
      { name: 'wood', tax: 2.1 },
      { name: 'small cannon ball', tax: 2.5 },
      { name: 'medium cannon ball', tax: 5 },
      { name: 'large cannon ball', tax: 7.5 },
      { name: 'basic labor', tax: 3 },
      { name: 'skilled labor', tax: 4 },
      { name: 'expert labor', tax: 5 },
   ];

   const emeraldCommodityTaxes = [
      { name: 'iron', tax: 1.0 },
      { name: 'wood', tax: 2.0 },
      { name: 'small cannon ball', tax: 2.0 },
      { name: 'medium cannon ball', tax: 3.8 },
      { name: 'large cannon ball', tax: 5.6 },
      { name: 'basic labor', tax: 3 },
      { name: 'skilled labor', tax: 4 },
      { name: 'expert labor', tax: 5 },
   ];

   createUser(adminUser);
   createUser(testUser);
   createTaxChart('obsidian', obsidianCommodityTaxes);
   createTaxChart('emerald', emeraldCommodityTaxes);
});
