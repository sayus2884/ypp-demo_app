import ACTIONS from '/imports/helpers/actions';
import { combineReducers } from 'redux';
import chai, { expect } from 'chai';

const _ = lodash;

export const user = (state = {}, action) => {
   return action.type === ACTIONS.SET_USER ? action.payload : state;
}

export const currentShoppe = (state = 0, action) => {
   return action.type === ACTIONS.SET_CURRENT_SHOPPE ? action.payload : state;
}


export const commodities = (state = [], action) => {
   if (action.type === ACTIONS.SET_COMMODITY) {
      const { commodityIndex, payload } = action;
      expect(commodityIndex).to.be.a('number');
      return [
         ...state.slice(0, commodityIndex), payload,
         ...state.slice(commodityIndex + 1)
      ]
   }

   return state;
}

export const labor = (state = [], action) => {
   const { laborIndex, payload } = action;

   if (action.type === ACTIONS.SET_LABOR) {
      expect(laborIndex).to.be.a('number');
      return [
         ...state.slice(0, laborIndex),
         payload,
         ...state.slice(laborIndex + 1)
      ]
   }

   return state;
}

export const shoppe = (state = {}, action) => {

   switch (action.type) {
      case ACTIONS.ADD_SHOPPE:
         return action.payload;

      case ACTIONS.SET_COMMODITY:
         return  { ...state, commodities: commodities(state.commodities, action) };

      case ACTIONS.SET_LABOR:
         return  { ...state, labor: labor(state.labor, action) };

      default:
         return state;
   }
}

export const allShoppes = (state = [], action) => {

   switch (action.type) {
      case ACTIONS.SET_SHOPPES:
         return action.payload;

      case ACTIONS.ADD_SHOPPE:
         return [ ...state, shoppe(null, action) ];

      case ACTIONS.SET_COMMODITY:
         expect(action.shoppeIndex).to.be.a('number');
         return [
            ...state.slice(0, action.shoppeIndex),
            shoppe(state[action.shoppeIndex], action),
            ...state.slice(action.shoppeIndex + 1)
         ];

      case ACTIONS.SET_LABOR:
         expect(action.shoppeIndex).to.be.a('number');
         return [
            ...state.slice(0, action.shoppeIndex),
            shoppe(state[action.shoppeIndex], action),
            ...state.slice(action.shoppeIndex + 1)
         ];

      default:
      return state;
   }
}

export const taxChart = (state = {}, action) => {
   return action.type === ACTIONS.SET_TAX_CHART ? action.payload : state
}

export const loading = (state = {}, action) => {
   return action.type === ACTIONS.LOAD_DATA ? action.payload : state
}

export default combineReducers({
   user,
   currentShoppe,
   allShoppes,
   taxChart,
   loading
});
