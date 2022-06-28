import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'http://localhost:8000/',
  //   headers: {
  //     // 'Access-Control-Allow-Origin': '*',
  //     // 'Access-Control-Allow-Credentials': true,
  //     // origin: 'http://127.0.0.1:8000',
  //     'Access-Control-Allow-Origin': '*',
  //     // 'Access-Control-Allow-headers': '*',
  //   },
});

export default axiosConfig;
