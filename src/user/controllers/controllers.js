import axios from 'axios';

// change path to /api/fetchHotels
export function fetchHotels() {
    return axios.get('/api/admin/fetchHotels');
}
