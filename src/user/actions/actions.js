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
        id: '1',
        user: {
            _id: '1',
        },
        requestedAt: moment(new Date()).add(-29.5, 'm'),
        guests: 3,
        room: {
            id: '1',
            type: 'Twin',
            capacity: 5,
            cost: 15,
            services: [{ id: '2', count: 3 }],
            hotel: {
                id: '630e8a94-4f9se-11je9-8647-ds663bd873d93',
                country: 'Belarus',
                hotelName: 'Forest-and-Heaven Themed Apartment Close to the Heart of the CBD',
                address: 'Red Square, 1',
                city: 'Minsk',
                services: [
                    {
                        id: '1',
                        hotelId: '1',
                        facility: {
                            id: '1',
                            name: 'internet',
                            isPaidPerRoom: true,
                            canBePaid: true,
                        },
                        price: 2,
                    },
                    {
                        id: '2',
                        hotelId: '1',
                        facility: {
                            id: '3',
                            name: 'breakfast',
                            isPaidPerRoom: false,
                            canBePaid: true,
                        },
                        price: 5,
                    },
                    {
                        id: '3',
                        hotelId: '1',
                        facility: {
                            id: '4',
                            name: 'TV',
                            canBePaid: false,
                        },
                    },
                ],
            },
        },
        totalPrice: 35,
        dateFrom: new Date(),
        dateTo: moment(new Date())
            .add(3, 'd')
            .toDate(),
        arrivalTime: '15:30',
        departureTime: '09:30',
        isApproved: true,
        hotelThumbnailUrl: 'http://localhost:3000/default-images/polar.jpg',
    },
    {
        id: '2',
        user: {
            _id: '1',
        },
        requestedAt: moment(new Date()).add(-29.5, 'm'),
        guests: 3,
        room: {
            id: '1',
            type: 'Twin',
            capacity: 5,
            cost: 15,
            services: [{ id: '2', count: 3 }],
            hotel: {
                id: '630e8a94-4f9se-11je9-8647-ds663bd873d93',
                country: 'Belarus',
                hotelName: 'Boutique Loft with a Private Terrace',
                address: 'Red Square, 1',
                city: 'Minsk',
                services: [
                    {
                        id: '1',
                        hotelId: '1',
                        facility: {
                            id: '1',
                            name: 'internet',
                            isPaidPerRoom: true,
                            canBePaid: true,
                        },
                        price: 2,
                    },
                    {
                        id: '2',
                        hotelId: '1',
                        facility: {
                            id: '3',
                            name: 'breakfast',
                            isPaidPerRoom: false,
                            canBePaid: true,
                        },
                        price: 5,
                    },
                    {
                        id: '3',
                        hotelId: '1',
                        facility: {
                            id: '4',
                            name: 'TV',
                            canBePaid: false,
                        },
                    },
                ],
            },
        },
        totalPrice: 305,
        dateFrom: new Date(),
        dateTo: moment(new Date())
            .add(3, 'd')
            .toDate(),
        arrivalTime: '15:30',
        departureTime: '09:30',
        isApproved: true,
        hotelThumbnailUrl: 'http://localhost:3000/default-images/pool.jpg',
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
