import controllers from '../controllers/controllers';
import {userTypes} from './types';

function createUser(data) {
  console.log("creating user");
  return async (dispatch) => {
    try {
      const newUser = await controllers.register(data);
      //  dispatch({type: userTypes.CREATE_USER}, newUser);
    } catch (err) {
      console.log(err);
    }
  };
}

export const userActions = {
  createUser
};
