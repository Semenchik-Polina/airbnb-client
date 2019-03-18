import { modalTypes } from '../actions/types';

const initialState = {
    isModalShown: false,
    isShowSignUp: true,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
    case modalTypes.SWITCH_MODAL_INNER: {
        return {
            ...state,
            isShowSignUp: !state.isShowSignUp,
        };
    }
    case modalTypes.SHOW_LOGIN_MODAL: {
        return {
            ...state,
            isModalShown: true,
            isShowSignUp: false,
        };
    }
    case modalTypes.SHOW_SIGNUP_MODAL: {
        return {
            ...state,
            isModalShown: true,
            isShowSignUp: true,
        };
    }
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
