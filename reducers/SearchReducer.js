import { SEARCH } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH:
        return {
          ...state,
          results: action.payload
        };
    default:
      return {...state};
  }
}