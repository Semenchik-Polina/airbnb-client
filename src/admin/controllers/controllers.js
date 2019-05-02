import axios from 'axios';

// test
export function saveImages(formData) {
    return axios({
        method: 'post',
        url: '/api/images',
        formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } },
    });
}

export function createHotel(data) {
    return axios({
        method: 'post',
        url: '/api/hotels',
        data,
        config: { headers: { 'Content-Type': 'multipart/form-data' } },
    });
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
