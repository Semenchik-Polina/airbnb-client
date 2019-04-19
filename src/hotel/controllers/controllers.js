import axios from 'axios';

export function fetchHotel(id) {
    return axios.get('/api/hotels', {
        params: {
            id,
        },
    });
}
