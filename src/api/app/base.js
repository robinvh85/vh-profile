import axios from 'axios';

const { REACT_APP_API_BASE_URL } = process.env;

axios.defaults.baseURL = REACT_APP_API_BASE_URL + '/api';

const initialize = function() {
  axios.interceptors.request.use(function (config) {
    // Add more config here
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
};

initialize();

export default axios;
