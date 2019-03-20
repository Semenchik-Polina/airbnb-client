import axios from 'axios';

function createHotel(data) {
    return axios
        .post('/api/admin/createHotel', data);
}

export default {
    createHotel,
};
