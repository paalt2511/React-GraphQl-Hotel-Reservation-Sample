import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import actions from '../actions';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class ReservationForm extends React.Component {
  defaultNoOfRooms = 1;
  defaultArrivalDate = moment(new Date()).format('YYYY-MM-DD');
  defaultDepartureDate = moment(new Date())
    .add(1, 'days')
    .format('YYYY-MM-DD');
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        noOfRooms: this.defaultNoOfRooms,
        hotelId: props.hotelData.id,
        departureDate: this.defaultDepartureDate,
        arrivalDate: this.defaultArrivalDate
      },
      valid: false
    };
  }

  handleOnChange = event => {
    const { formData } = this.state;
    let valid;
    formData[event.target.name] = event.target.value;
    const { name, arrivalDate, departureDate, noOfRooms } = formData;
    if (name && arrivalDate && departureDate && noOfRooms) {
      valid = true;
    }
    this.setState({ formData, valid });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(actions.reservationForm.addHotelReservation(this.state.formData));
  };

  render() {
    const { classes } = this.props;
    let requiredFieldText = 'This field is required.';
    let { name, arrivalDate, departureDate, noOfRooms } = this.state.formData;
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="headline">Book Your Reservation</Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  id="name"
                  name="name"
                  label="Guest Name"
                  error={!name}
                  autoFocus
                  required
                  onChange={this.handleOnChange}
                  value={name}
                  helperText={!name && requiredFieldText}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  label="Check In"
                  name="arrivalDate"
                  type="date"
                  id="arrivalDate"
                  error={!arrivalDate}
                  onChange={this.handleOnChange}
                  defaultValue={arrivalDate}
                  value={arrivalDate}
                  helperText={!arrivalDate && requiredFieldText}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  name="departureDate"
                  type="date"
                  id="departureDate"
                  label={'Check Out'}
                  error={!departureDate}
                  onChange={this.handleOnChange}
                  defaultValue={departureDate}
                  value={departureDate}
                  helperText={!departureDate && requiredFieldText}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  name="noOfRooms"
                  type="number"
                  id="noOfRooms"
                  label={'Number of rooms.'}
                  error={!noOfRooms}
                  onChange={this.handleOnChange}
                  value={noOfRooms}
                  defaultValue={noOfRooms}
                  helperText={!noOfRooms && requiredFieldText}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                onClick={this.handleSubmit}
                disabled={!this.state.valid}
              >
                Book Now
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

export default connect(({ reservationForm }) => {
  const { hotelData, reservationData } = reservationForm;
  return {
    hotelData,
    reservationData
  };
})(withStyles(styles)(ReservationForm));
