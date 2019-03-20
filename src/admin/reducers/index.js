import { combineReducers } from 'redux';
import roomsReducer from './rooms';
import hotelInfoReducer from './hotel-info';

export default combineReducers({
    rooms: roomsReducer,
    hotelInfo: hotelInfoReducer,
});
