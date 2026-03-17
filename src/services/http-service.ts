import axios from 'axios';
import { API_TIMEOUT, BASE_URL } from '../config';
const request = axios.create({
  baseURL: BASE_URL,
  timeout: Number(API_TIMEOUT),
});

export default request;
