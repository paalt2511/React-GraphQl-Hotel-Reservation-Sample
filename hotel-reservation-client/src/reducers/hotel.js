let defaultState = {
  data: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_HOTELS':
      return { ...state, data: action.data.hotels };
    default:
      return state;
  }
};
