import { autosuggestTypes } from '../constants';

export function updateInputValue(value) {
    return (dispatch) => {
        dispatch({
            type: autosuggestTypes.UPDATE_INPUT_VALUE,
            value,
        });
    };
}

export function clearSuggestions() {
    return (dispatch) => {
        dispatch({
            type: autosuggestTypes.CLEAR_SUGGESTIONS,
        });
    };
}

export function loadSuggestionsBegin() {
    return (dispatch) => {
        dispatch({
            type: autosuggestTypes.LOAD_SUGGESTIONS_BEGIN,
        });
    };
}

export function maybeUpdateSuggestions(suggestions, value) {
    return (dispatch) => {
        dispatch({
            type: autosuggestTypes.MAYBE_UPDATE_SUGGESTIONS,
            suggestions,
            value,
        });
    };
}

const countries = [
    {
        name: 'Belarus',
    },
    {
        name: 'Russia',
    },
];

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getMatchingCountries(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp(`^${escapedValue}`, 'i');

    return countries.filter(language => regex.test(language.name));
}

export function loadSuggestions(value) {
    return (dispatch) => {
        dispatch(loadSuggestionsBegin());

        // Fake call
        setTimeout(() => {
            dispatch(maybeUpdateSuggestions(getMatchingCountries(value), value));
        }, 500);
    };
}
