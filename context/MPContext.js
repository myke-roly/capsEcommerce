import React, { createContext, useReducer, useEffect } from 'react';

export const ContextMP = createContext();
const MPContext = ({ children }) => {

  return (
    <ContextMP.Provider
      value={{}}
    >
      {children}
    </ContextMP.Provider>
  );
};

export default MPContext;
