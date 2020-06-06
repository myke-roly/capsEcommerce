const MPReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_DATA_MP':
      return {
        ...state,
        data: action.payload
      }
    default:
      return {...state};
  }
}

export default MPReducer;