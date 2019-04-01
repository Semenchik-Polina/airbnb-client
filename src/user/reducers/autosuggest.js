import { autosuggestTypes } from '../constants';

const initialState = {
    value: '',
    suggestions: [],
    isLoading: false,
};

const autosuggestReducer = (state = initialState, action) => {
    switch (action.type) {
    case autosuggestTypes.UPDATE_INPUT_VALUE:
        return {
            ...state,
            value: action.value,
        };

    case autosuggestTypes.CLEAR_SUGGESTIONS:
        return {
            ...state,
            suggestions: [],
        };

    case autosuggestTypes.LOAD_SUGGESTIONS_BEGIN:
        return {
            ...state,
            isLoading: true,
        };

    case autosuggestTypes.MAYBE_UPDATE_SUGGESTIONS:
        // Ignore suggestions if input value changed
        if (action.value !== state.value) {
            return {
                ...state,
                isLoading: false,
            };
        }

        return {
            ...state,
            suggestions: action.suggestions,
            isLoading: false,
        };

    default:
        return state;
    }
};

export default autosuggestReducer;
