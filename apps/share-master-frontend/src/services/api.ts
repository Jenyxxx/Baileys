import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:4080/api',
  timeout: 8000
});

api.interceptors.request.use((config) => {
  config.headers = config.headers ?? {};
  config.headers['X-App-Channel'] = 'share-master-web';
  return config;
});
