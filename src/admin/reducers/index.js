import { combineReducers } from 'redux';
import hotelInfoReducer from './hotel-info';
import facilitiesReducer from './facilities';
import hotelReducer from './hotels';

export default combineReducers({
    hotelInfo: hotelInfoReducer,
    hotels: hotelReducer,
    supposedFacilities: facilitiesReducer,
});
