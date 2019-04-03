import * as types from '../constants/types';

const initialState = {
    isModalShown: false,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.SHOW_AUTH_MODAL: {
        return {
            ...state,
            isModalShown: true,
        };
    }
    case types.HIDE_AUTH_MODAL: {
        return {
            ...state,
            isModalShown: false,
        };
    }
    default:
        return state;
    }
};

export default modalReducer;
