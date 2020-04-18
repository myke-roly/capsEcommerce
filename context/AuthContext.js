import React, { createContext, useReducer } from 'react';
import { REGISTER_OK, REGISTER_BAD } from '../types';
import AuthReducer from '../reducers/AuthReducer'; 
import { axiosFetch } from '../API';

export const ContextAuth = createContext();
const AuthContext = props => {

  const initalState = {
    auth: false,
    message: null
  }

  const [state, dispatch] = useReducer(AuthReducer, initalState);

  const newRegister = async dataUser => {
    try {
      const response = await axiosFetch('/sing-up', {
        method: 'POST',
        data: dataUser
      })
      console.log(response)
      dispatch({
        type: REGISTER_OK,
        payload: response.data.token
      })
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_BAD,
        payload: 'No se pudo registrar'
      })
    }
  }

  return (
    <ContextAuth.Provider value={{
      userData: state,
      newRegister: newRegister
    }}>
      {props.children}
    </ContextAuth.Provider>
  )
}

export default AuthContext;