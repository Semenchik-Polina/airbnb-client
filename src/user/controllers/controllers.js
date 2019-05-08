import axios from 'axios';

// change path to /api/fetchHotels
export function fetchHotels(filters) {
    return axios.get('/api/hotels', {
        params: {
            country: filters.location.country,
            city: filters.location.city,
            guests: filters.guests,
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
