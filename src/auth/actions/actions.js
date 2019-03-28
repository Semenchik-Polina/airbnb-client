import { toast } from 'react-toastify';
import controllers from '../controllers/controllers';
import { userTypes, authModalTypes } from '../constants';

const showErrorToast = (err) => {
    const message = err.response && err.response.data.error ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

export function signup(data) {
    return async (dispatch) => {
        try {
            await controllers.signup(data);
            dispatch({ type: authModalTypes.HIDE_AUTH_MODAL });
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
            dispatch({ type: userTypes.VALIDATE_USER, user });
            dispatch({ type: authModalTypes.HIDE_AUTH_MODAL });
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
            dispatch({ type: userTypes.LOGOUT_USER });
        } catch (err) {
            showErrorToast(err);
        }
    };
}

export function showModal() {
    return (dispatch) => {
        dispatch({ type: authModalTypes.SHOW_AUTH_MODAL });
    };
}

export function hideModal() {
    return (dispatch) => {
        dispatch({ type: authModalTypes.HIDE_AUTH_MODAL });
    };
}
