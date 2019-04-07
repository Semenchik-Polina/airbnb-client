import { combineReducers } from 'redux';
import hotelReducer from './hotels';
import hotelFiltersReducer from './hotelFilters';
import bookingFiltersReducer from './bookingFilters';
import autosuggestReducer from './autosuggest';
import userBookingsReducer from './userBookings';

export default combineReducers({
    hotels: hotelReducer,
    hotelFilters: hotelFiltersReducer,
    bookingFilters: bookingFiltersReducer,
    autosuggest: autosuggestReducer,
    userBookings: userBookingsReducer,
});
