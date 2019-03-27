import axios from 'axios';

export function fetchHotel(id) {
    return axios.get('/api/admin/fetchHotel', {
        params: {
            id,
        },
    });
}
