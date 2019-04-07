import { connect } from 'react-redux';

import BookingFilterPanel from '../components/booking-filter-panel/booking-filter-panel';

import * as actions from '../actions/actions';
import * as autosuggestActions from '../actions/autosuggestActions';

export default connect(
    state => ({
        suggestions: state.userReducer.autosuggest.suggestions,
        bookingFilters: state.userReducer.bookingFilters,
        autosuggestValue: state.userReducer.autosuggest.value,
    }),
    dispatch => ({
        onInputChange: (event, { newValue }) => dispatch(autosuggestActions.updateInputValue(newValue)),
        onSuggestionsFetchRequested: ({ value }) => dispatch(autosuggestActions.loadSuggestions(value)),
        onSuggestionsClearRequested: () => dispatch(autosuggestActions.clearSuggestions()),
        clearSuggestions: () => dispatch(autosuggestActions.clearValue()),
        switchBookingRelevance: () => dispatch(actions.switchBookingRelevance()),
        setBookingLocation: location => dispatch(actions.setBookingLocation(location)),
        clearBookingLocation: () => dispatch(actions.clearBookingLocation()),
    }),
)(BookingFilterPanel);
