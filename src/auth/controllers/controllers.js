import axios from 'axios';

function signup(data) {
    return axios.post('/api/signup', data);
}

function login(data) {
    return axios.post('/api/login', data);
}

function logout() {
    return axios.get('/api/logout');
}

export default {
    signup,
    login,
    logout,
};
