import { toast } from 'react-toastify';
import controllers from '../controllers/controllers';
import { userTypes, modalTypes } from '../constants';

const showErrorToast = (err) => {
    const message = err.response && err.response.data.error ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

function signup(data) {
    return async (dispatch) => {
        try {
            await controllers.signup(data);
            dispatch({ type: modalTypes.HIDE_MODAL });
            document.body.style.overflow = 'visible';
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
            document.body.style.overflow = 'visible';
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

function showModal() {
    return (dispatch) => {
        dispatch({ type: modalTypes.SHOW_MODAL });
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
    showModal,
    hideModal,
};
