import axios from 'axios';

const handleResponse = response => response.data;

const handleError = err => Promise.reject(err.response.data);

function register(data) {
    return axios
        .post('/register', data)
        .then(handleResponse)
        .catch(handleError);
}

export default {
    register,
};
