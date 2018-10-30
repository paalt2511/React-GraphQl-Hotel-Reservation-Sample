import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import actions from '../actions';
import AppHeader from './AppHeader';

class ReservationList extends Component {
  getReservationList = () => this.props.dispatch(actions.reservation.getReservations());

  hideReservation = () => this.props.dispatch(actions.reservation.hideReservation());

  render() {
    const { reservations } = this.props;
    return (
      <div>
        <AppHeader
          title="Reservations"
          onRefreshClick={this.getReservationList}
          buttonText="Go Back"
          onButtonClick={this.hideReservation}
        />
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Guest</TableCell>
                <TableCell>HotelName</TableCell>
                <TableCell>Check IN</TableCell>
                <TableCell>Check OUT</TableCell>
                <TableCell numeric>No Of Rooms</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reservations.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.hotelName}
                    </TableCell>
                    <TableCell>{row.arrivalDate}</TableCell>
                    <TableCell>{row.departureDate}</TableCell>
                    <TableCell numeric>{row.noOfRooms}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }

  componentDidMount() {
    this.getReservationList();
  }
}

export default connect(({ reservation }) => ({
  reservations: reservation.data
}))(ReservationList);
