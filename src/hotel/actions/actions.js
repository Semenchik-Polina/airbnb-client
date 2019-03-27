import { toast } from 'react-toastify';

import * as controllers from '../controllers/controllers';
import { hotelPageTypes } from '../constants';

const showErrorToast = (err) => {
    const message = err.response && err.response.data.error ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

export function fetchHotel(id) {
    return async (dispatch) => {
        try {
            const { data } = await controllers.fetchHotel(id);
            dispatch({
                type: hotelPageTypes.FETCH_HOTEL,
                data,
            });
        } catch (err) {
            showErrorToast(err);
        }
    };
}
