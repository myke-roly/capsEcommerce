import { createContext, useReducer } from 'react';
import CartReducer from '../reducers/CartReducer';

export const ContextCart = createContext();
const CartContext = ({ children }) => {
  const initialState = {
    itemsL: 0,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  function getNumItems(items) {
    dispatch({
      type: NUM_ITEMS_CART,
      payload: items,
    });
  }

  return (
    <CartContext
      value={{
        items: state.items,
        getNumItems,
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartContext;
