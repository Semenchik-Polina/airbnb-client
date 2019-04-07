import { toast } from 'react-toastify';
import moment from 'moment';

import * as controllers from '../controllers/controllers';
import * as types from '../constants/types';

const showErrorToast = (err) => {
    const message = err.response && err.response.data.error ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

const userBookings = [
    {
        _id: '1',
        user: {
            _id: '1',
        },
        requestedAt: moment(new Date()).add(-29.5, 'm'),
        guests: 3,
        room: {
            _id: '1',
            type: 'Twin',
            capacity: 5,
            cost: 15,
            services: [],
        },
        hotel: {
            _id: '1',
            country: 'Belarus',
            city: 'Minsk',
            hotelName: 'Forest-and-Heaven Themed Apartment Close to the Heart of the CBD',
        },
        totalPrice: 15,
        dateFrom: new Date(),
        dateTo: new Date(),
        arrivalTime: '15:30',
        departureTime: '09:30',
    },
    {
        _id: '1',
        user: {
            _id: '1',
        },
        requestedAt: moment(new Date()).add(-29.5, 'm'),
        guests: 3,
        room: {
            _id: '1',
            type: 'Twin',
            capacity: 5,
            cost: 15,
            services: [],
        },
        hotel: {
            _id: '1',
            country: 'Belarus',
            city: 'Minsk',
            hotelName: 'Forest-and-Heaven Themed Apartment Close to the Heart of the CBD',
        },
        totalPrice: 15,
        dateFrom: new Date(),
        dateTo: new Date(),
        arrivalTime: '15:30',
        departureTime: '09:30',
    },
];

export function fetchUserBookings() {
    return async (dispatch) => {
        dispatch({
            type: types.FETCH_USER_BOOKINGS,
            data: userBookings,
        });
    };
}

export function fetchHotels() {
    return async (dispatch) => {
        try {
            const { data } = await controllers.fetchHotels();

            dispatch({
                type: types.FETCH_ALL_HOTELS,
                data,
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
