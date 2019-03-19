import { modalTypes } from '../constants';

const initialState = {
    isModalShown: false,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
    case modalTypes.SHOW_MODAL: {
        return {
            ...state,
            isModalShown: true,
        };
    }
    case modalTypes.HIDE_MODAL: {
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
