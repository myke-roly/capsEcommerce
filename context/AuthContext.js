import React, { createContext, useReducer} from 'react';
import {
  REGISTER_OK,
  REGISTER_BAD,
  LOGUIN_OK,
  LOGUIN_BAD,
  LOGOUT,
  GET_USER,
  HIDDEN_MESSAGE,
} from '../types';
import AuthReducer from '../reducers/AuthReducer';
import { axiosFetch } from '../API/axios';
import { authToken } from '../API/token';

export const ContextAuth = createContext();
const AuthContext = (props) => {
  const initalState = {
    user: null,
    auth: false,
    token: null,
    message: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initalState);

  const newRegister = async (dataUser) => {
    try {
      const response = await axiosFetch('api/login', {
        method: 'POST',
        data: dataUser,
      });
      dispatch({
        type: REGISTER_OK,
        payload: response.data.token,
      });
      authUser();
    } catch (error) {
      dispatch({
        type: REGISTER_BAD,
        payload: error.response.data.message,
      });
      setTimeout(() => {
        dispatch({
          type: HIDDEN_MESSAGE,
        });
      }, 3000);
    }
  };

  const authUser = async () => {
    const token = localStorage.getItem('token');
    if (token) authToken(token)
    else return;
    try {
      const response = await axiosFetch.get('/api/auth');
      dispatch({
        type: GET_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGUIN_BAD,
      });
    }
  };

  const logIn = async (data) => {
    try {
      const response = await axiosFetch('/api/auth', {
        method: 'POST',
        data: data,
      });
      dispatch({
        type: LOGUIN_OK,
        payload: response.data.token,
      });
      authUser();
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGUIN_BAD,
        payload: error.response.data.message,
      });
      setTimeout(() => {
        dispatch({
          type: HIDDEN_MESSAGE,
        });
      }, 3000);
    }
  };

  const logOut = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <ContextAuth.Provider
      value={{
        user: state.user,
        message: state.message,
        auth: state.auth,
        loading: state.loading,
        newRegister,
        logIn,
        logOut,
        getUser: authUser,
      }}
    >
      {props.children}
    </ContextAuth.Provider>
  );
};

export default AuthContext;
