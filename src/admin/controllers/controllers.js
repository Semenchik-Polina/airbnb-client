import axios from 'axios';

const handleResponse = response => response.data;

const handleError = err => Promise.reject(err.response.data);

function createHotel(data) {
    return axios
        .post('api/admin/createHotel', data)
        .then(handleResponse)
        .catch(handleError);
}

export default {
    createHotel,
};
