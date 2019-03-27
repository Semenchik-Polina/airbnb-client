import { toast } from 'react-toastify';

import * as sharedControllers from '../controllers/controllers';
import { sharedTypes } from '../constants';

const showErrorToast = (err) => {
    const message = err.response && err.response.data.error ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

export function fetchHotels() {
    return async (dispatch) => {
        try {
            const { data } = await sharedControllers.fetchHotels();

            dispatch({
                type: sharedTypes.FETCH_ALL_HOTELS,
                data,
            });
        } catch (err) {
            showErrorToast(err);
        }
    };
}
