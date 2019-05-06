import { toast } from 'react-toastify';
import moment from 'moment';

import * as controllers from '../controllers/controllers';
import * as types from '../constants/types';

const showErrorToast = (err) => {
    const message = err.response && err.response.data.error ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

export function fetchUserBookings(filters) {
    return async (dispatch) => {
        const {
            data: { bookings },
        } = await controllers.fetchUserBookings(filters);
        console.log(bookings);
        dispatch({
            type: types.FETCH_USER_BOOKINGS,
            bookings,
        });
    };
}

export function fetchHotels() {
    return async (dispatch) => {
        try {
            const {
                data: { hotels },
            } = await controllers.fetchHotels();

            dispatch({
                type: types.FETCH_ALL_HOTELS,
                hotels,
            });
        } catch (err) {
            showErrorToast(err);
        }
    };
}

export function setDateFilterRange(range) {
    return (dispatch) => {
        dispatch({
            type: types.SET_DATE_RANGE,
            range,
        });
    };
}

export function incrementGuestsCount() {
    return (dispatch) => {
        dispatch({
            type: types.INCREMENT_GUEST_COUNT,
        });
    };
}

export function decrementGuestsCount() {
    return (dispatch) => {
        dispatch({
            type: types.DECREMENT_GUEST_COUNT,
        });
    };
}

export function setLocation(location) {
    return (dispatch) => {
        dispatch({
            type: types.SET_LOCATION,
            location,
        });
    };
}

export function clearDateFilter() {
    return (dispatch) => {
        dispatch({
            type: types.CLEAR_DATE_FILTER,
        });
    };
}

export function clearGuestFilter() {
    return (dispatch) => {
        dispatch({
            type: types.CLEAR_GUEST_FILTER,
        });
        dispatch({
            type: types.CLEAR_SUGGESTIONS,
        });
    };
}

export function clearLocationFilter() {
    return (dispatch) => {
        dispatch({
            type: types.CLEAR_LOCATION_FILTER,
        });
        dispatch({
            type: types.CLEAR_SUGGESTIONS,
        });
    };
}

export function applyFilters() {
    return () => {
        // fake request here
        // fetchHotels with filters field
    };
}

export function switchBookingRelevance() {
    return (dispatch) => {
        dispatch({
            type: types.SWITCH_BOOKING_RELEVANCE,
        });
    };
}

export function setBookingLocation(location) {
    return (dispatch) => {
        dispatch({
            type: types.SET_BOOKING_LOCATION,
            location,
        });
    };
}

export function clearBookingLocation() {
    return (dispatch) => {
        dispatch({
            type: types.CLEAR_BOOKING_LOCATION_FILTER,
        });
    };
}
