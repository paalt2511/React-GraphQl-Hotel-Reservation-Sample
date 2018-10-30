
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import rootReducer from '../reducers';


export default function configureStore() {
    const middleware = createReactNavigationReduxMiddleware(
        'root',
        state => state.nav,
    );
    const store = createStore(rootReducer, applyMiddleware(thunk, middleware));
    return store;
}
