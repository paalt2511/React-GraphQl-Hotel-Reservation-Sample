
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import hotel from './hotels'
import RootNavigation from '../../navigator';
const INITIAL_STATE = RootNavigation.router.getStateForAction(NavigationActions.init());
const navigation = (state = INITIAL_STATE, action) => {
    const newState = RootNavigation.router.getStateForAction(action, state);
    return newState || state;
};


export default combineReducers({
    nav: navigation,
    hotel
});