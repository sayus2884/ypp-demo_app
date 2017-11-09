import ACTIONS from '/imports/helpers/actions';

export const setUser = () => {
   const user = Meteor.user();

   return {
      type: ACTIONS.SET_USER,
      payload: user
   }
}
