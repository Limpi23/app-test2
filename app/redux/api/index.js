import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export default (url, method, data, headers) =>
  axios({
    baseURL,
    method,
    url,
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      ...headers,
    },
  });
