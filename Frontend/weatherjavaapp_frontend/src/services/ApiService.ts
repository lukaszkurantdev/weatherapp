import axios, {
  AxiosRequestConfig as AxiosRequestConfigFromAxios,
} from 'axios';

export interface AxiosRequestConfig extends AxiosRequestConfigFromAxios {}

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const API_BASE_URL = 'http://127.0.0.1:3000/';

const Points = {
  LOGIN: 'login',
  REGISTER: 'register',
};

const request = axios.create({
  baseURL: PROXY_URL + API_BASE_URL,
  responseType: 'json',

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

request.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('myData');

    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
  },
  (error) => {
    // console.log(error);
    Promise.reject(error);
  }
);

export default {
  request,
  Points,
};
