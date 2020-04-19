import React, { createContext, useReducer } from 'react';
import { SHOW_MESSAGE, HIDDEN_MESSAGE } from '../types';
import messageReducer from '../reducers/MessageReducer';

export const ContextMessage = createContext();
const MessageContext = (props) => {
  const initialState = {
    message: null,
  };

  const [ state, dispatch ] = useReducer(messageReducer, initialState);

  const showMessage = (msg, category) => {
    dispatch({
      type: SHOW_MESSAGE,
      payload: { msg, category },
    });

    /** Ocultar mensaje despues de 5 seg. */
    setTimeout(() => {
      dispatch({
        type: HIDDEN_MESSAGE,
      });
    }, 5000);
  };

  return (
    <ContextMessage.Provider value={{
      messageAlert: state.message,
      showMessage: showMessage
    }}>
      {props.children}
    </ContextMessage.Provider>
  );
};

export default MessageContext;
