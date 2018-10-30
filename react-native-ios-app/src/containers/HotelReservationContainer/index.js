
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from '../AppContainer';
import configureStore from '../../common/store/configureStore';

const store = configureStore();

type Props = {};

class HotelReservationContainer extends Component<Props> {
    static navigationOptions =  {
    header: null,
    }

    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

export default HotelReservationContainer;