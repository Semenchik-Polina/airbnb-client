import { toast } from 'react-toastify';
import controllers from '../controllers/controllers';
import * as types from '../constants/types';

const showErrorToast = (err) => {
    const message = err.response && err.response.data.error ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

export function signup(data) {
    return async (dispatch) => {
        try {
            await controllers.signup(data);
            dispatch({ type: types.HIDE_AUTH_MODAL });
            document.body.style.overflow = 'visible';
        } catch (err) {
            showErrorToast(err);
        }
    };
}

export function login(values) {
    return async (dispatch) => {
        try {
            const {
                data: { user },
            } = await controllers.login(values);
            dispatch({ type: types.VALIDATE_USER, user });
            dispatch({ type: types.HIDE_AUTH_MODAL });
            document.body.style.overflow = 'visible';
        } catch (err) {
            showErrorToast(err);
        }
    };
}

export function logout() {
    return async (dispatch) => {
        try {
            await controllers.logout();
            dispatch({ type: types.LOGOUT_USER });
        } catch (err) {
            showErrorToast(err);
        }
    };
}

export function showModal() {
    return (dispatch) => {
        dispatch({ type: types.SHOW_AUTH_MODAL });
    };
}

export function hideModal() {
    return (dispatch) => {
        dispatch({ type: types.HIDE_AUTH_MODAL });
    };
}
