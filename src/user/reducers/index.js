import { combineReducers } from 'redux';
import hotelReducer from './hotels';
import filterReducer from './filters';
import autosuggestReducer from './autosuggest';

export default combineReducers({
    hotels: hotelReducer,
    filters: filterReducer,
    autosuggest: autosuggestReducer,
});
