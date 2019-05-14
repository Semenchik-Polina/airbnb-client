import { toast } from 'react-toastify';

import history from '../../shared/tools/history';
import Hotel from '../../shared/models/hotel';

import * as controllers from '../controllers/controllers';
import * as types from '../constants/types';

const showErrorToast = (err) => {
    const message = err.response && err.response.data.error ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

export function fetchHotel(id) {
    return async (dispatch) => {
        try {
            const {
                data: { hotel },
            } = await controllers.fetchHotel(id);

            dispatch({
                type: types.FETCH_HOTEL,
                hotel: new Hotel(hotel),
            });
        } catch (err) {
            showErrorToast(err);
        }
    };
}

export function requestBooking(values) {
    return async () => {
        try {
            const booking = {
                guests: values.guests,
                room: values.room.id,
                dateFrom: values.dates.from,
                dateTo: values.dates.to,
            };

            const {
                data: { id },
            } = await controllers.createBooking(booking);
            history.push(`/books/${id}`);
        } catch (err) {
            showErrorToast(err);
        }
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

export function fetchOccupiedDates(room, dateFrom, dateTo) {
    return async (dispatch) => {
        try {
            const {
                data: { dates },
            } = await controllers.fetchOccupiedDates(room, dateFrom, dateTo);

            dispatch({ type: types.FETCH_OCCUPIED_DATES, occupiedDates: dates.map(date => new Date(date)) });
        } catch (err) {
            showErrorToast(err);
        }
    };
}
