let initialState = {
  itemCount: 0,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, itemCount: state.itemCount + 1 };
    case "REMOVE_TO_CART":
      return { ...state, itemCount: state.itemCount - 1 };
    default:
      return state;
  }
};
