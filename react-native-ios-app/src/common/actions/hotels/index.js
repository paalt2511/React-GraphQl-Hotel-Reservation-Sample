import networks  from '../common'
import Constants from '../../constant'

export const getHotelsList = () => (dispatch, getState) => {
    dispatch(requestStarted())
    networks.getHotels()
            .then((result) => {
                dispatch(requestCompleted())
                console.log('\n Hotel List: \n',result)
                dispatch({
                    type: Constants.HOTEL_LIST,
                    payload: result,
                });
            }).catch((error) => {
                 dispatch(requestCompleted())
            });
    return null;
};

export const getReservations = () => (dispatch, getState) => {
    dispatch(requestStarted())
    networks.getReservations()
        .then((result) => {
            dispatch(requestCompleted())
            console.log('\n Reservation List: \n',result)
            dispatch({
                type: Constants.RESERVATION_LIST,
                payload: result,
            });
        }).catch((error) => {
        dispatch(requestCompleted())
    });
    return null;
};

export const createReservation = (name, hotelId, arrivalDate, departureDate) => (dispatch, getState) => {
    dispatch(requestStarted())
    console.log("Name >>>>", name)
    console.log("hotelId >>>>", hotelId)
    networks.createReservation({name, hotelId, arrivalDate, departureDate})
        .then((result) => {
            dispatch(requestCompleted())
            console.log('\n Reservation Created List \n',result)
            dispatch({
                type: Constants.CREATE_RESERVATION,
                payload: result,
            });
            navigateToReservationList(dispatch)

        }).catch((error) => {
        dispatch(requestCompleted())
    });
    return null;
};

const requestCompleted = () => (dispatch) => {
    dispatch({
        type: Constants.REQUEST_COMPLETED,
    });
};

const requestStarted = () => (dispatch) => {
    dispatch({
        type: Constants.REQUEST_STARTED,
        payload: '',
    });
};

export const navigateToReservationList = (dispatch) => {
    dispatch({
        key: 'NearMeMap',
        type: 'ReplaceCurrentScreen',
        routeName: 'ReservationList',
    });
};