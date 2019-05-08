import axios from 'axios';

export function fetchHotel(id) {
    return axios.get(`/api/hotels/${id}`);
}

export function createBooking(booking) {
    return axios.post('/api/user/bookings', { ...booking });
}
