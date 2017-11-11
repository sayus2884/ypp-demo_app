import { Taxes } from '/imports/api/taxes';
import { RECIPES } from '/imports/helpers/recipes';

const _ = lodash;

// Calculate revenue if sold on docks
export const calculateDockRevenue = ({ priceAdjustment, baseCost }) => {
   return priceAdjustment + baseCost;
}

// Calculate revenue if sold on docks
export const calculateRevenue = ({ onHand, buyPrice, sellPrice }) => {
   let profit = 0;

   return sellPrice * onHand;
}

// Calculate profit if sold on docks and produced in house
export const calculateDockProfit = (recipeName, { onHand, useCost, buyPrice, sellPrice }, labor, commodities) => {

   if (hasRecipe(recipeName)) {
      return (sellPrice * onHand) - (buyPrice * onHand);
   }

   let profit = 0;
   const casedRecipeName = _.toUpper(_.snakeCase(recipeName));
   const totalBaseCost = calculateBaseCost( casedRecipeName, commodities, onHand, labor );
   const totalDockSales = calculateDockSales( onHand, sellPrice);

   profit = totalDockSales - totalBaseCost;

   if (( profit % 1 ) < 0.5 && ( profit % 1 ) > 0) {
      profit = _.round(profit) + 1;

      return profit;
   } else {
      return _.round(profit);
   }

   return profit;
}

// Calculate total tax of recipe
const calculateRecipeTax = (recipeName) => {
   if (!_.has(RECIPES, recipeName)) {
      return 0;
   }

   // Get recipe based on recipe name
   const recipe = RECIPES[recipeName];
   const { commodities } = Taxes.findOne();
   let cost = 0

   recipe.ingredients.map(({ name, units }) => {

      const { tax } = _.find(commodities, { name });
      cost += units * tax;

   });

   return cost;
}

export const calculateBaseCost = ( recipeName, commodities, onHand, labor ) => {
   if (!_.has(RECIPES, recipeName)) {
      return 0;
   }

   // Get recipe based on recipe name
   const recipe = RECIPES[recipeName];
   let baseCost = 0

   recipe.ingredients.map(({ name, units }) => {

      if (name.includes('labor')) {
         const { wage } = _.find(labor, { name });
         baseCost += units * wage;

      } else {
         const { buyPrice } = _.find(commodities, {name});
         baseCost += units * buyPrice;
      }
   });

   return (onHand / recipe.producedUnits) * baseCost;
}

const calculateUseCost = ( recipeName, commodities, labor ) => {
   if (!_.has(RECIPES, recipeName)) {
      return 0;
   }

   // Get recipe based on recipe name
   const recipe = RECIPES[recipeName];
   let useCost = 0

   recipe.ingredients.map(({ name, units }) => {

      if (name.includes('labor')) {
         const { cost } = _.find(labor, { name });
         useCost += units * cost;

      } else {
         const { cost } = _.find(commodities, { name });
         useCost += units * cost;
      }
   });

   return useCost;
}

const calculateDockSales = ( onHand, sellPrice ) => {

   // Get recipe based on recipe name
   const sales = sellPrice * onHand;

   return sales;
}

const hasRecipe = (recipeName) => {
   return !_.has(RECIPES,  _.toUpper(_.snakeCase( recipeName )));
}
