import { connect } from 'react-redux';

import FilterPanel from '../components/filter-panel/filter-panel';

import * as actions from '../actions/autosuggestActions';

export default connect(
    state => ({
        autosuggestValue: state.userReducer.autosuggest.value,
        suggestions: state.userReducer.autosuggest.suggestions,
        isLoading: state.userReducer.autosuggest.isLoading,
    }),
    dispatch => ({
        onChange: (event, { newValue }) => dispatch(actions.updateInputValue(newValue)),
        onSuggestionsFetchRequested: ({ value }) => dispatch(actions.loadSuggestions(value)),
        onSuggestionsClearRequested: () => dispatch(actions.clearSuggestions()),
    }),
)(FilterPanel);
