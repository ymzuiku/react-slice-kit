import Axios from 'axios';
const isDev = process.env.NODE_ENV === 'development';

const axios = Axios.create({
  baseURL: isDev ? 'http://127.0.0.1:4000' : 'http://api.workos.top',
  timeout: 1000,
});

export default axios;
