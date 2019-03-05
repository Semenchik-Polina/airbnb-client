import axios from 'axios';

const handleResponse = (response) => {
  return response.data;
};

const handleError = (err) => {
  return Promise.reject(err.response.data);
};

function register(data) {
  return axios
    .post('/register', data)
    .then(handleResponse)
    .catch(handleError);
}

export default {
  register
};
