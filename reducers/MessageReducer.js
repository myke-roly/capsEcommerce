import { SHOW_MESSAGE, HIDDEN_MESSAGE } from '../types';

const messageReducer = (state, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return { message: action.payload.msg };
    case HIDDEN_MESSAGE:
      return { message: null };
    default:
      break;
  }
};

export default messageReducer;
