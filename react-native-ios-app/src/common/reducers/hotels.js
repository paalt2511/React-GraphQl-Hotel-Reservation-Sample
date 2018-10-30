
import { createReducer } from '../../common/util';
import Constant from '../../common/constant';

const initialState = {
    loading: false,
    loadingMessage: '',
    hotelList:[],
    reservationCreated:null,
    reservationList:[]
};

export default createReducer(initialState, {
    [Constant.REQUEST_STARTED]: (state, payload) => Object.assign({}, state, {
        loading: true,
        loadingMessage: payload,
    }),
    [Constant.REQUEST_COMPLETED]: state => Object.assign({}, state, {
        loading: false,
        loadingMessage: '',
    }),
    [Constant.HOTEL_LIST]: (state, payload) => {
       return  Object.assign({}, state, {
            hotelList: payload.data.hotels,
        });
    },
    [Constant.CREATE_RESERVATION]: (state, payload) => Object.assign({}, state, {
        reservationCreated:payload ,
    }),
    [Constant.RESERVATION_LIST]: (state, payload) => Object.assign({}, state, {
        reservationList:payload.data.reservations ,
    }),
});