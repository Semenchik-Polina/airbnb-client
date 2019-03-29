import { combineReducers } from 'redux';
import hotelReducer from './hotels';
import filterReducer from './filters';

export default combineReducers({
    hotels: hotelReducer,
    filters: filterReducer,
});
