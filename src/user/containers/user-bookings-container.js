import { connect } from 'react-redux';

import UserBookings from '../components/user-bookings/user-bookings';

import * as actions from '../actions/actions';
import * as autosuggestActions from '../actions/autosuggestActions';

export default connect(
    state => ({
        bookings: state.userReducer.userBookings,
        bookingFilters: state.userReducer.bookingFilters,
        _id: state.auth.user._id,
    }),
    dispatch => ({
        fetchUserBookings: id => dispatch(actions.fetchUserBookings(id)),
        onInputChange: (event, { newValue }) => dispatch(autosuggestActions.updateInputValue(newValue)),
        onSuggestionsFetchRequested: ({ value }) => dispatch(autosuggestActions.loadSuggestions(value)),
        onSuggestionsClearRequested: () => dispatch(autosuggestActions.clearSuggestions()),
        clearSuggestions: () => dispatch(autosuggestActions.clearValue()),
        switchBookingRelevance: () => dispatch(actions.switchBookingRelevance()),
        setBookingLocation: location => dispatch(actions.setBookingLocation(location)),
    }),
)(UserBookings);
