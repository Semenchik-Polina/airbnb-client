import { toast } from 'react-toastify';

import * as sharedControllers from '../controllers/controllers';
import * as types from '../constants/types';

const showErrorToast = (err) => {
    const message = err.response && err.response.data.error ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

export function fetchHotels() {
    return async (dispatch) => {
        try {
            const { data } = await sharedControllers.fetchHotels();

            dispatch({
                type: types.FETCH_ALL_HOTELS,
                data,
            });
        } catch (err) {
            showErrorToast(err);
        }
    };
}
