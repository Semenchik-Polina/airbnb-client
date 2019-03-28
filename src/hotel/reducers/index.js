import { combineReducers } from 'redux';
import hotelReducer from './hotel';
import modalReducer from './modal';

export default combineReducers({
    hotel: hotelReducer,
    bookingModal: modalReducer,
});
