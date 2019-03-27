import { combineReducers } from 'redux';
import hotelReducer from './hotels';

export default combineReducers({
    hotels: hotelReducer,
});
