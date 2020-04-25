import {
  REGISTER_OK,
  REGISTER_BAD,
  GET_USER,
  LOGUIN_BAD,
  LOGUIN_OK,
  LOGOUT,
  HIDDEN_MESSAGE
} from '../types';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_OK:
    case LOGUIN_OK:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        auth: true,
        message: null,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        auth: true,
        user: action.payload,
        loading: false
      };
    case LOGOUT:
    case LOGUIN_BAD:
    case REGISTER_BAD:
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        auth: false,
        token: null,
        message: action.payload,
      };
    case HIDDEN_MESSAGE:
      return {
        ...state,
        message: null
      }
    default:
      return state;
  }
};

export default AuthReducer;
