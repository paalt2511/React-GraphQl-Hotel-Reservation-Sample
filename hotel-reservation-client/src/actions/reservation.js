import network from '../network';

export default {
  showReservations: () => dispatch => {
    dispatch({ type: 'SHOW_RESERVATIONS' });
  },
  hideReservation: () => dispatch => {
    dispatch({ type: 'HIDE_RESERVATIONS' });
  },
  getReservations: () => dispatch =>
    network
      .getReservations()
      .then(reservations => dispatch({ type: 'SET_RESERVATIONS', data: reservations.data }))
};
