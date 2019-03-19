import axios from 'axios';

function createHotel(data) {
    return axios
        .post('/api/admin/createHotel', data);
}

function addRooms(data) {
    return axios
        .post('/api/admin/addRooms', data);
}

function addServices(data) {
    return axios
        .post('/api/admin/addServices', data);
}

export default {
    createHotel,
    addRooms,
    addServices,
};
