import controllers from '../controllers/controllers';
import { hotelTypes } from './types';

function createHotel(data) {
    return async (dispatch) => {
        try {
            //await controllers.createHotel(data);
            //  dispatch({type: userTypes.CREATE_USER}, newUser);
        } catch (err) {
            console.log(err);
        }
    };
}

function addRooms(data) {
    return async (dispatch) => {
        try {
           // await controllers.createHotel(data);
            //  dispatch({type: userTypes.CREATE_USER}, newUser);
        } catch (err) {
            console.log(err);
        }
    };
}

function addServices(data) {
    return async (dispatch) => {
        try {
           // await controllers.createHotel(data);
            //  dispatch({type: userTypes.CREATE_USER}, newUser);
        } catch (err) {
            console.log(err);
        }
    };
}


export const adminActions = {
    createHotel,
    addRooms,
    addServices,
};
