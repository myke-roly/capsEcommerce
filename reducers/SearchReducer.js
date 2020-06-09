import { SEARCH, CLEAN_SEARCH } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH:
        return {
          ...state,
          results: action.payload
        };
        case CLEAN_SEARCH:
        return {
          results: []
        }
    default:
      return {...state};
  }
}