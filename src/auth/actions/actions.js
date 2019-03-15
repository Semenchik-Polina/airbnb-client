import controllers from '../controllers/controllers';
import { userTypes } from './types';

function signup(data) {
    return async () => {
        try {
            await controllers.signup(data);
            // if ok -- showModal with signUp
        } catch (err) {
            console.log(err);
        }
    };
}

function login(data) {
    return async (dispatch) => {
        try {
            const { user } = await controllers.login(data);

            dispatch({ type: userTypes.VALIDATE_USER, user });
        } catch (err) {
            console.log(err);
        }
    };
}

function logout() {
    return async (dispatch) => {
        try {
            await controllers.logout();
            dispatch({ type: userTypes.LOGOUT_USER });
        } catch (err) {
            console.log(err);
        }
    };
}

export const userActions = {
    signup,
    login,
    logout,
};
