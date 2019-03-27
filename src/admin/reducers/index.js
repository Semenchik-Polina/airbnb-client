import { combineReducers } from 'redux';
import hotelInfoReducer from './hotel-info';
import hotelReducer from './hotels';

export default combineReducers({
    hotelInfo: hotelInfoReducer,
    hotels: hotelReducer,
});
