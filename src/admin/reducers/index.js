import { combineReducers } from 'redux';
import hotelInfoReducer from './hotel-info';

export default combineReducers({
    hotelInfo: hotelInfoReducer,
});
