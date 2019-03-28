import { authModalTypes } from '../constants';

const initialState = {
    isModalShown: false,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
    case authModalTypes.SHOW_AUTH_MODAL: {
        return {
            ...state,
            isModalShown: true,
        };
    }
    case authModalTypes.HIDE_AUTH_MODAL: {
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
