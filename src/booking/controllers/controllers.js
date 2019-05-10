import axios from 'axios';

export function fetchBooking(id) {
    return axios.get(`/api/user/bookings/${id}`);
}

export function approveBooking(booking) {
    return axios.put(`/api/user/bookings/approve/${booking.id}`, { ...booking });
}

export function shiftTime(booking) {
    return axios.patch(`/api/user/bookings/shift-time/${booking.id}`, { ...booking });
}
