let defaultState = {
  hotelData: null,
  open: false,
  reservationData: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_RESERVATION_POP_UP_FORM':
      return { ...state, open: true, hotelData: action.data };
    case 'HIDE_RESERVATION_FORM':
      return { ...state, open: false };
    default:
      return state;
  }
};
