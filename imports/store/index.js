import ACTIONS from '/imports/helpers/actions';
import appReducer from '/imports/store/reducers';
import { createStore, applyMiddleware } from 'redux';

const consoleMessages = store => next => action => {
   let result;

   console.groupCollapsed(`dispatching action: ${action.type}`);

   result = next(action);

   console.groupEnd();

   return result;
}

export default (initialState={}) => {
   return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState);
}
