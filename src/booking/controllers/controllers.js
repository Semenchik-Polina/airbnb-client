import axios from 'axios';

export function fetchBooking(id) {
    return axios.get(`/api/user/bookings/${id}`);
}
