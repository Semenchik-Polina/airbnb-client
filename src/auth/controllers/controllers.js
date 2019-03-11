import axios from 'axios';

const handleResponse = response => response.data;

const handleError = err => Promise.reject(err.response.data);

function signup(data) {
    return axios
        .post('/signup', data)
        .then(handleResponse)
        .catch(handleError);
}

function login(data) {
    return axios
        .post('/login', data)
        .then(handleResponse)
        .catch(handleError);
}

export default {
    signup,
    login,
};
