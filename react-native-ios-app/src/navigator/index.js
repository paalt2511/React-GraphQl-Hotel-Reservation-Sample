
import { StackNavigator } from 'react-navigation';

import  Dashboard from '../containers/DashboardContainer'
import  ReservationContainer from '../containers/ReservationContainer'
import  ReservationListContainer from '../containers/ReservationListContainer'


const AppNavigator = StackNavigator(
    {
        Dashboard: { screen: Dashboard },
        Reservation: { screen: ReservationContainer },
        ReservationList: { screen: ReservationListContainer },
    }
);


const preGetStateForAction = AppNavigator.router.getStateForAction;
AppNavigator.router.getStateForAction = (action, state) => {
    console.log("action.type", action.type)
    if (state && action.type === 'ReplaceCurrentScreen') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
            ...state,
            routes,
            index: routes.length - 1,
        };
    }
    return preGetStateForAction(action, state);
};


export default AppNavigator;





