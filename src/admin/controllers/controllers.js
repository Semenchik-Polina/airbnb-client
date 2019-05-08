import axios from 'axios';

export function saveImages(formData) {
    return axios.post('/api/images', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export function createHotel(hotel) {
    return axios.post('/api/hotels', { ...hotel });
}

export function deleteHotel(id) {
    return axios.delete(`/api/hotels/${id}`);
}

// not working yet
export function editHotel(data) {
    return axios({
        method: 'post',
        url: '/api/hotels/editHotel',
        data,
        config: { headers: { 'Content-Type': 'multipart/form-data' } },
    });
}

export function fetchHotels() {
    return axios.get('/api/hotels');
}

export function fetchHotel(id) {
    return axios.get(`/api/hotels/${id}`);
}

export function fetchSupposedFacilities() {
    return axios.get('/api/admin/base-facilities');
}

export function fetchSupposedRoomTypes() {
    return axios.get('/api/admin/room-types');
}