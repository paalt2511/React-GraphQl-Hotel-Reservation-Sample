import { combineReducers } from 'redux';
import reservationForm from './reservationForm';
import reservation from './reservation';
import hotel from './hotel';

const reducers = combineReducers({
  reservationForm,
  hotel,
  reservation
});

export default reducers;
