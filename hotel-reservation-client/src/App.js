import React from 'react';
import { connect } from 'react-redux';
import HotelList from './component/HotelList';
import ReservationForm from './component/ReservationForm';
import ReservationTable from './component/ReservationTable';
import './App.css';

const App = ({ reservationFormLayout, reservationsList }) => {
  if (reservationsList) {
    return <ReservationTable />;
  } else if (reservationFormLayout) {
    return <ReservationForm />;
  }
  return <HotelList />;
};

export default connect(state => ({
  reservationFormLayout: state.reservationForm.open,
  reservationsList: state.reservation.open
}))(App);
