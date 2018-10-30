import network from '../network';

export default {
  getHotels: () => dispatch =>
    network.getHotels().then(hotels => dispatch({ type: 'SET_HOTELS', data: hotels.data })),
  openReservationPopup: data => ({
    type: 'SHOW_RESERVATION_POP_UP_FORM',
    data
  })
};
