import * as types from '../constants/types';

const territories = [
    {
        name: 'Belarus, Minsk',
        country: 'Belarus',
        city: 'Minsk',
    },
    {
        name: 'Belarus, Gomel',
        country: 'Belarus',
        city: 'Gomel',
    },
    {
        name: 'Belarus, Brest',
        country: 'Belarus',
        city: 'Brest',
    },
    {
        name: 'Poland, Warsaw',
        country: 'Poland',
        city: 'Warsaw',
    },
    {
        name: 'Poland, Krakow',
        country: 'Poland',
        city: 'Krakow',
    },
];

export function updateInputValue(value) {
    return (dispatch) => {
        dispatch({
            type: types.UPDATE_INPUT_VALUE,
            value,
        });
    };
}

export function clearSuggestions() {
    return (dispatch) => {
        dispatch({
            type: types.CLEAR_SUGGESTIONS,
        });
    };
}

export function loadSuggestionsBegin() {
    return (dispatch) => {
        dispatch({
            type: types.LOAD_SUGGESTIONS_BEGIN,
        });
    };
}

export function maybeUpdateSuggestions(suggestions, value) {
    return (dispatch) => {
        dispatch({
            type: types.MAYBE_UPDATE_SUGGESTIONS,
            suggestions,
            value,
        });
    };
}

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getMatchingTerritories(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp(`${escapedValue}`, 'i');

    return territories.filter(territory => regex.test(territory.name));
}

export function loadSuggestions(value) {
    return (dispatch) => {
        dispatch(loadSuggestionsBegin());

        // Fake call
        setTimeout(() => {
            dispatch(maybeUpdateSuggestions(getMatchingTerritories(value), value));
        }, 500);
    };
}