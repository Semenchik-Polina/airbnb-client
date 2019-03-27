import axios from 'axios';

export function createHotel(data) {
    return axios({
        method: 'post',
        url: '/api/admin/createHotel',
        data,
        config: { headers: { 'Content-Type': 'multipart/form-data' } },
    });
}

export function editHotel(data) {
    return axios({
        method: 'post',
        url: '/api/admin/editHotel',
        data,
        config: { headers: { 'Content-Type': 'multipart/form-data' } },
    });
}

export function fetchHotels() {
    return axios.get('/api/admin/fetchHotels');
}
