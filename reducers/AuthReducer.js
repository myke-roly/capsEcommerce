import { MESSAGE_ERROR } from '../types';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case MESSAGE_ERROR:
      return { ...state };
    default:
      return state;
  }
};