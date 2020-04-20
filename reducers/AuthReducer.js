import {
  REGISTER_OK,
  REGISTER_BAD,
  GET_USER,
  LOGUIN_BAD,
  LOGUIN_OK,
} from '../types';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_OK:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        auth: true,
        message: null,
      };
    case GET_USER:
      return {
        ...state,
        auth: true,
        user: action.payload,
      };
    case LOGUIN_OK:
    localStorage.setItem('token', action.payload);
      return {
        ...state,
        message: null,
        user: action.payload,
      };
    case LOGUIN_BAD:
    case REGISTER_BAD:
      localStorage.removeItem('token');
      return {
        ...state,
        auth: false,
        token: null,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
