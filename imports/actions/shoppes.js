import ACTIONS from '/imports/helpers/actions';
import { Shoppes } from '/imports/api/shoppes';
import { Taxes } from '/imports/api/taxes';

export const setOwnerShoppes = (ownerId = "") => {
   // fetch data from api
   const shoppes = Shoppes.find().fetch();

   return {
      type: ACTIONS.SET_SHOPPES,
      payload: shoppes
   }
}

export const setCurrentShoppe = (index = 0) => {
   return {
      type: ACTIONS.SET_CURRENT_SHOPPE,
      payload: parseInt(index)
   }
}

export const addShoppe = (data = {}) => {
   // add new shoppe
}

export const setTaxChart = () => {
   const taxChart = Taxes.findOne();

   return {
      type: ACTIONS.SET_TAX_CHART,
      payload: taxChart
   }
}

export const setLabor = () => {
   // set labor to shope
}

export const setCommodity = ( commodity, shoppeIndex, commodityIndex) => {

   return {
      type: ACTIONS.SET_COMMODITY,
      payload: commodity,
      shoppeIndex,
      commodityIndex
   }
}
