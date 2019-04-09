import moment from 'moment';

import history from '../../shared/tools/history';

import * as types from '../constants/types';

export function fetchBooking() {
    return (dispatch) => {
        const booking = {
            _id: '1',
            user: {
                _id: '1',
            },
            requestedAt: moment(new Date()).add(-29.9, 'm'),
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
                services: {
                    internet: 'Yes, for free',
                    parking: 'Yes, for free',
                    breakfast: 'Yes',
                    facilities: [
                        'Self check-in',
                        'Bathroom essentials',
                        'Elevator',
                        'Coffee maker',
                        'Iron',
                        'Hair dryer',
                        'Kitchen',
                        'Wi-Fi',
                        'TV',
                    ],
                },
            },
            totalPrice: 15,
            dateFrom: new Date(),
            dateTo: moment(new Date())
                .add(3, 'd')
                .toDate(),
        };
        dispatch({ type: types.FETCH_BOOKING, booking });
        return booking;
    };
}

export function addBookingDetails(details, id) {
    return (dispatch) => {
        dispatch({ type: types.ADD_BOOKING_DETAILS, details });
        history.push(`/books/${id}/payload`);
    };
}

export function makeFinalBooking() {
    return (dispatch) => {
        // api action
        history.push('/hotels');
    };
}
