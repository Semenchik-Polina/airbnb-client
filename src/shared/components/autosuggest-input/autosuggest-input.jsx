import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Autosuggest from 'react-autosuggest';

import './autosuggest-input.scss';

const theme = {
    container: 'autosuggest-input__container',
    containerOpen: 'autosuggest-input__container--open',
    input: 'autosuggest-input__input',
    inputOpen: 'autosuggest-input__input--open',
    inputFocused: 'autosuggest-input__input--focused',
    suggestionsContainer: 'autosuggest-input__suggestions-container',
    suggestionsContainerOpen: 'autosuggest-input__suggestions-container--open',
    suggestionsList: 'autosuggest-input__suggestions-list',
    suggestion: 'autosuggest-input__suggestion',
    suggestionFirst: 'autosuggest-input__suggestion--first',
    suggestionHighlighted: 'autosuggest-input__suggestion--highlighted',
    sectionContainer: 'autosuggest-input__section-container',
    sectionContainerFirst: 'autosuggest-input__section-container--first',
    sectionTitle: 'autosuggest-input__section-title',
};

class AutosuggestInput extends PureComponent {
    static defaultProps = {
        getSuggestionValue: () => {},
    };

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        onSuggestionsFetchRequested: PropTypes.func.isRequired,
        onSuggestionsClearRequested: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
        suggestions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        getSuggestionValue: PropTypes.func,
    };

    getSuggestionValue = (suggestion) => {
        this.props.getSuggestionValue(suggestion);
        return suggestion.name;
    };

    renderSuggestion = suggestion => <span>{suggestion.name}</span>;

    render() {
        const {
            value, suggestions, onChange, onSuggestionsFetchRequested, onSuggestionsClearRequested,
        } = this.props;

        const inputProps = {
            placeholder: 'Type country or city',
            value,
            onChange,
        };

        return (
            <Autosuggest
                theme={theme}
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default AutosuggestInput;
