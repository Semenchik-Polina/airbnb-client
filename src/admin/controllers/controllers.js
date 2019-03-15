import axios from 'axios';

const handleResponse = response => response.data;

const handleError = err => Promise.reject(err.response.data);

// http://localhost:4000/ should be stored in ENV variables or constants

function createHotel(data) {
    return axios
        .post('http://localhost:4000/api/admin/createHotel', data)
        .then(handleResponse)
        .catch(handleError);
}

function addRooms(data) {
    return axios
        .post('http://localhost:4000/api/admin/addRooms', data)
        .then(handleResponse)
        .catch(handleError);
}

function addServices(data) {
    return axios
        .post('http://localhost:4000/api/admin/addServices', data)
        .then(handleResponse)
        .catch(handleError);
}

export default {
    createHotel,
    addRooms,
    addServices,
};
