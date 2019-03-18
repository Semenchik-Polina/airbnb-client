import { toast } from 'react-toastify';
import controllers from '../controllers/controllers';
import { userTypes, modalTypes } from './types';

const showErrorToast = (err) => {
    const message = err.response && err.response.data ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

function signup(data) {
    return async (dispatch) => {
        try {
            await controllers.signup(data);
            dispatch({ type: modalTypes.SWITCH_MODAL_INNER });
        } catch (err) {
            showErrorToast(err);
        }
    };
}

function login(values) {
    return async (dispatch) => {
        try {
            const {
                data: { user },
            } = await controllers.login(values);
            dispatch({ type: userTypes.VALIDATE_USER, user });
            dispatch({ type: modalTypes.HIDE_MODAL });
        } catch (err) {
            showErrorToast(err);
        }
    };
}

function logout() {
    return async (dispatch) => {
        try {
            await controllers.logout();
            dispatch({ type: userTypes.LOGOUT_USER });
        } catch (err) {
            showErrorToast(err);
        }
    };
}

function switchModalInner() {
    return (dispatch) => {
        dispatch({ type: modalTypes.SWITCH_MODAL_INNER });
    };
}
function showSignUpModal() {
    return (dispatch) => {
        dispatch({ type: modalTypes.SHOW_SIGNUP_MODAL });
    };
}
function showLoginModal() {
    return (dispatch) => {
        dispatch({ type: modalTypes.SHOW_LOGIN_MODAL });
    };
}

function hideModal() {
    return (dispatch) => {
        dispatch({ type: modalTypes.HIDE_MODAL });
    };
}

export const userActions = {
    signup,
    login,
    logout,
};

export const modalActions = {
    switchModalInner,
    showLoginModal,
    showSignUpModal,
    hideModal,
};
