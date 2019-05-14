import axios from 'axios';

export function fetchHotels(filters) {
    return axios.get('/api/hotels', {
        params: {
            country: filters.location.country,
            city: filters.location.city,
            guests: filters.guests,
            dateFrom: filters.dateRange.from,
            dateTo: filters.dateRange.to,
        },
    });
}

export function fetchUserBookings(filters) {
    return axios.get('/api/user/bookings', {
        params: {
            country: filters.location.country,
            city: filters.location.city,
            isCompleted: filters.isCompleted,
        },
    });
}

export function removeBooking(id) {
    return axios.delete(`/api/user/bookings/${id}`);
}
