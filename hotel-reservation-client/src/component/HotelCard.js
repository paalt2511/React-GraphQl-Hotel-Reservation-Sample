import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import actions from '../actions';

const styles = {
  card: {
    width: '30%',
    marginTop: 10
  },
  media: {
    height: 200,
    width: '100%'
  },
  bookButton: {
    color: 'white',
    backgroundColor: 'red'
  }
};

const HotelCard = props => {
  const { classes, data, dispatch } = props;
  let { name, city, cover, noOfRooms } = data;
  let openReservationDialog = () => dispatch(actions.hotel.openReservationPopup(data));
  return (
    <div>
      <div className="flexRow">
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={cover} title={name} />
        </Card>
        <div className="flexColumn">
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {name}
            </Typography>
            <Typography component="p">{city}</Typography>
            <Typography component="p">Available Rooms: {noOfRooms}</Typography>
          </CardContent>
          {noOfRooms && (
            <CardActions>
              <Button
                size="small"
                color="secondary"
                onClick={openReservationDialog}
                className={classes.bookButton}
              >
                Book Now
              </Button>
            </CardActions>
          )}
        </div>
      </div>
      <Divider light />
    </div>
  );
};

export default withStyles(styles)(HotelCard);
