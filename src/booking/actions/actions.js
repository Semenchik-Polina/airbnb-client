import moment from 'moment';

import history from '../../shared/tools/history';

import * as types from '../constants/types';

export function fetchBooking() {
    return (dispatch) => {
        const booking = {
            id: '1',
            user: {
                _id: '1',
            },
            requestedAt: new Date(),
            guests: 3,
            room: {
                id: '1',
                type: 'Twin',
                capacity: 5,
                cost: 15,
                services: [{ id: '2', count: 3 }], // booking services will store like that
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
                                id: '2',
                                name: 'parking',
                                isPaidPerRoom: false,
                                canBePaid: true,
                            },
                            price: 10,
                        },
                        {
                            id: '4',
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
                        {
                            id: '4',
                            hotelId: '1',
                            facility: {
                                id: '5',
                                name: 'Iron',
                                canBePaid: false,
                            },
                        },
                        {
                            id: '5',
                            hotelId: '1',
                            facility: {
                                id: '7',
                                name: 'Kitchen',
                                canBePaid: false,
                            },
                        },
                        {
                            id: '6',
                            hotelId: '1',
                            facility: {
                                id: '9',
                                name: 'Coffee maker',
                                canBePaid: false,
                            },
                        },
                        {
                            id: '7',
                            hotelId: '1',
                            facility: {
                                id: '12',
                                name: 'Self check-in',
                                canBePaid: false,
                            },
                        },
                        {
                            id: '8',
                            hotelId: '1',
                            facility: {
                                id: '11',
                                name: 'Bathroom essentials',
                                canBePaid: false,
                            },
                        },
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
        const paidFacilities = details.paidFacilities
            .filter(facility => facility.checked)
            .map((facility) => {
                const bookingFacility = { id: facility.id };
                if (!facility.isPaidPerRoom) {
                    bookingFacility.count = +facility.count;
                }

                return bookingFacility;
            });

        dispatch({
            type: types.ADD_BOOKING_DETAILS,
            details: {
                paidFacilities,
                arrivalTime: details.arrivalTime,
                departureTime: details.departureTime,
                guests: +details.guests,
            },
        });
        history.push(`/books/${id}/payload`);
    };
}

export function makeFinalBooking() {
    return () => {
        // api action
        history.push('/hotels');
    };
}
