import React, { createContext, useReducer } from 'react';
import { REGISTER_OK, REGISTER_BAD, LOGUIN_OK, LOGUIN_BAD, GET_USER } from '../types';
import AuthReducer from '../reducers/AuthReducer'; 
import { axiosFetch } from '../API/axios';
import { authToken } from '../API/token';

export const ContextAuth = createContext();
const AuthContext = props => {

  const initalState = {
    user: null,
    auth: false,
    message: null,
    token: null
  }

  const [state, dispatch] = useReducer(AuthReducer, initalState);

  const newRegister = async dataUser => {
    try {
      const response = await axiosFetch('/sing-up', {
        method: 'POST',
        data: dataUser
      });
      dispatch({
        type: REGISTER_OK,
        payload: response.data.token
      })
      await getUser();
    } catch (error) {
      dispatch({
        type: REGISTER_BAD,
        payload: error.response.data.message
      })
    }
  }

  const getUser = async () => {
    const token = localStorage.getItem('token');
    if(token) authToken(token);
    try {
      const response = await axiosFetch.get('/auth');
      dispatch({
        type: GET_USER,
        payload: response.data
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGUIN_BAD
      });
    }
  }

  return (
    <ContextAuth.Provider value={{
      user: state.user,
      message: state.message,
      auth: state.auth,
      newRegister: newRegister
    }}>
      {props.children}
    </ContextAuth.Provider>
  )
}

export default AuthContext;