export const initialState = {
  active: false,
};

export const actionTypes = {
  SET_ACTIVE: true,
  SET_DEACTIVE: false,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        active: action.active,
      };

    default:
      return state;
  }
};

export default reducer;
