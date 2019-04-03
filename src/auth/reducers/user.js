import * as types from '../constants/types';

const initialState = JSON.parse(localStorage.getItem('user')) || null;

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.VALIDATE_USER: {
        const { user } = action;
        localStorage.setItem('user', JSON.stringify(user));
        return {
            ...user,
        };
    }
    case types.LOGOUT_USER: {
        localStorage.removeItem('user');
        return null;
    }
    default:
        return state;
    }
};

export default userReducer;
