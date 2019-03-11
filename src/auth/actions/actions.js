import controllers from '../controllers/controllers';
import { userTypes } from './types';

function signup(data) {
    return async (dispatch) => {
        try {
            const newUser = await controllers.signup(data);
            //  dispatch({type: userTypes.CREATE_USER}, newUser);
        } catch (err) {
            console.log(err);
        }
    };
}

function login(data) {
    return async (dispatch) => {
        try {
            const user = await controllers.login(data);
            //  dispatch({type: userTypes.VALIDATE_USER}, user);
        } catch (err) {
            console.log(err);
        }
    };
}

export const userActions = {
    signup,
    login,
};
