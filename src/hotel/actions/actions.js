import { toast } from 'react-toastify';

import history from '../../shared/tools/history';

import * as controllers from '../controllers/controllers';
import * as types from '../constants/types';

const showErrorToast = (err) => {
    const message = err.response && err.response.data.error ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

export function fetchHotel(id) {
    return async (dispatch) => {
        try {
            const { data } = await controllers.fetchHotel(id);
            dispatch({
                type: types.FETCH_HOTEL,
                data,
            });
        } catch (err) {
            showErrorToast(err);
        }
    };
}

export function requestBooking(values) {
    return () => {
        // fake request
        history.push('/books/1');
    };
}
export function showModal() {
    return (dispatch) => {
        dispatch({ type: types.SHOW_BOOKING_MODAL });
    };
}

export function hideModal() {
    return (dispatch) => {
        dispatch({ type: types.HIDE_BOOKING_MODAL });
    };
}
