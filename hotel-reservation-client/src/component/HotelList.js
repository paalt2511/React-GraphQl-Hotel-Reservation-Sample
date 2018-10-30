import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import HotelCard from './HotelCard';
import AppHeader from './AppHeader';

class HotelList extends Component {
  getHotelList = () => this.props.dispatch(actions.hotel.getHotels());

  showReservations = () => this.props.dispatch(actions.reservation.showReservations());

  render() {
    return (
      <div>
        <AppHeader
          title="Hotels"
          onRefreshClick={this.getHotelList}
          buttonText="Check Reservation List"
          onButtonClick={this.showReservations}
        />
        {this.props.hotels.map(hotel => (
          <HotelCard key={hotel.id} data={hotel} dispatch={this.props.dispatch} />
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.getHotelList();
  }
}

export default connect(state => ({ hotels: state.hotel.data }))(HotelList);
