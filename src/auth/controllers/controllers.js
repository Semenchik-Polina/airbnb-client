import axios from 'axios';

function signup(data) {
    return axios.post('/api/auth/signup', data);
}

function login(data) {
    return axios.post('/api/auth/login', data);
}

function logout() {
    return axios.get('/api/auth/logout');
}

export default {
    signup,
    login,
    logout,
};
