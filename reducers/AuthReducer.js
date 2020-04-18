import { REGISTER_OK, REGISTER_BAD } from '../types';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_OK:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        auth: true,
        message: null,
      };
    case REGISTER_BAD:
      return {
        ...state,
        auth: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
