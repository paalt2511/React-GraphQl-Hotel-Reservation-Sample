import network from '../network';
import hotelActions from './hotel';

export default {
  addHotelReservation: data => dispatch =>
    network.createReservation(data).then(() => {
      dispatch(hotelActions.getHotels()).then(() =>
        dispatch(dispatch({ type: 'HIDE_RESERVATION_FORM' }))
      );
    })
};
