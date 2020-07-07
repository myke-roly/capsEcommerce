import * as actions from '../types';

const MPReducer = (state, action) => {
  switch (action.type) {
    case actions.GET_METHODS_PAYMENT:
      return {
        ...state,
        methodsPayment: action.payload
      }
    default:
      return {...state};
  }
}

export default MPReducer;