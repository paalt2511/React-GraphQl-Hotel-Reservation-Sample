let defaultState = {
  data: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_RESERVATIONS':
      return { ...state, open: true };
    case 'HIDE_RESERVATIONS':
      return { ...state, open: false };
    case 'SET_RESERVATIONS':
      return { ...state, data: action.data.reservations };
    default:
      return state;
  }
};
