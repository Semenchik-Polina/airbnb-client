import axios from 'axios';

export function fetchHotel(id) {
    return axios.get(`/api/hotels/${id}`);
}

export function createBooking(booking) {
    return axios.post('/api/user/bookings', { ...booking });
}

export function fetchOccupiedDates(room, dateFrom, dateTo) {
    return axios.get('/api/user/bookings/dates/occupied', { params: { room, dateFrom, dateTo } });
}
