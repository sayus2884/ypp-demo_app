import ACTIONS from '/imports/helpers/actions';

export const loadData = (loading) => {
   return {
      type: ACTIONS.LOAD_DATA,
      payload: loading
   }
}
