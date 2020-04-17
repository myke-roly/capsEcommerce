import React, { createContext } from 'react';

export const ContextAuth = createContext();
const AuthContext = props => {

  return (
    <ContextAuth.Provider>
      {props.children}
    </ContextAuth.Provider>
  )
}

export default AuthContext;