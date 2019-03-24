import axios from 'axios';

function createHotel(data) {
    return axios({
        method: 'post',
        url: '/api/admin/createHotel',
        data,
        config: { headers: { 'Content-Type': 'multipart/form-data' } },
    });
}

function editHotel(data) {
    return axios({
        method: 'post',
        url: '/api/admin/editHotel',
        data,
        config: { headers: { 'Content-Type': 'multipart/form-data' } },
    });
}


function fetchHotels() {
    return axios.get('/api/admin/fetchHotels');
}

export default {
    createHotel,
    fetchHotels,
    editHotel,
};
