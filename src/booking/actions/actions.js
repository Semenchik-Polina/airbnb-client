import moment from 'moment';

import history from '../../shared/tools/history';

import * as types from '../constants/types';

const bookings = [
    {
        id: '1',
        user: {
            _id: '5c8baf13896e7f4b60d6796f',
        },
        requestedAt: new Date(),
        guests: 3,
        services: [{ id: '2', count: 3 }], // booking services will be stored like that
        room: {
            id: '1',
            type: 'Twin',
            capacity: 5,
            cost: 15,
            hotel: {
                id: '1',
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
        isApproved: false,
        dateFrom: new Date(),
        dateTo: moment(new Date())
            .add(3, 'd')
            .toDate(),
    },
    {
        id: '2',
        user: {
            _id: '5c8baf13896e7f4b60d6796f',
        },
        requestedAt: new Date(),
        services: [{ id: '2', count: 3 }],
        guests: 3,
        room: {
            id: '1',
            type: 'Twin',
            capacity: 5,
            cost: 15,
            hotel: {
                id: '3',
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
        isApproved: true,
        arrivalTime: '11:00:00',
        departureTime: '16:00:00',
        dateFrom: new Date(),
        dateTo: moment(new Date())
            .add(3, 'd')
            .toDate(),
    },
];

export function fetchBooking(id) {
    return (dispatch) => {
        const booking = bookings.find(item => item.id === id);
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

export function makeFinalBooking(booking, details) {
    return () => {
        const paidFacilities = details.paidFacilities
            .filter(facility => facility.checked)
            .map((facility) => {
                const bookingFacility = { id: facility.id };
                if (!facility.isPaidPerRoom) {
                    bookingFacility.count = +facility.count;
                }

                return bookingFacility;
            });
        const finalBooking = {
            ...booking,
            paidFacilities,
            arrivalTime: details.arrivalTime,
            departureTime: details.departureTime,
            guests: +details.guests,
            isApproved: true,
        };

        console.log(finalBooking);
        // api - send finalBooking to server
        history.push(`/${finalBooking.user._id}/bookings`);
    };
}

export function changeCheckInCheckOutTime(booking, details) {
    return () => {
        const finalBooking = {
            ...booking,
            arrivalTime: details.arrivalTime,
            departureTime: details.departureTime,
        };

        console.log(finalBooking);
        // api - send booking to server
        history.push(`/${finalBooking.user._id}/bookings`);
    };
}
