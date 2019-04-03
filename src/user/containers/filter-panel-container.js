import { connect } from 'react-redux';

import FilterPanel from '../components/filter-panel/filter-panel';

import * as autosuggestActions from '../actions/autosuggestActions';
import * as actions from '../actions/actions';

export default connect(
    state => ({
        autosuggestValue: state.userReducer.autosuggest.value,
        suggestions: state.userReducer.autosuggest.suggestions,
        isLoading: state.userReducer.autosuggest.isLoading,
        guests: state.userReducer.filters.guests,
        dateRange: state.userReducer.filters.dateRange,
        location: state.userReducer.filters.location,
    }),
    dispatch => ({
        onInputChange: (event, { newValue }) => dispatch(autosuggestActions.updateInputValue(newValue)),
        onSuggestionsFetchRequested: ({ value }) => dispatch(autosuggestActions.loadSuggestions(value)),
        onSuggestionsClearRequested: () => dispatch(autosuggestActions.clearSuggestions()),
        setDateFilterRange: range => dispatch(actions.setDateFilterRange(range)),
        incrementGuestsCount: () => dispatch(actions.incrementGuestsCount()),
        decrementGuestsCount: () => dispatch(actions.decrementGuestsCount()),
        setLocation: location => dispatch(actions.setLocation(location)),
        clearDateFilter: () => dispatch(actions.clearDateFilter()),
        clearGuestFilter: () => dispatch(actions.clearGuestFilter()),
        clearLocationFilter: () => dispatch(actions.clearLocationFilter()),
        applyFilters: () => dispatch(actions.applyFilters()),
    }),
)(FilterPanel);
