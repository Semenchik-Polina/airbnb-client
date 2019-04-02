import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Autosuggest from 'react-autosuggest';

import './autosuggest-input.scss';

const theme = {
    container: 'autosuggest-input__container',
    input: 'autosuggest-input__input',
};

class AutosuggestInput extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        onSuggestionsFetchRequested: PropTypes.func.isRequired,
        onSuggestionsClearRequested: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
        suggestions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    };

    getSuggestionValue = suggestion => suggestion.name;

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
            <div className="autosuggest">
                <Autosuggest
                    theme={theme}
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                />
            </div>
        );
    }
}

export default AutosuggestInput;
