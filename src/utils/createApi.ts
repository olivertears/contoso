import axios, { AxiosHeaders, AxiosInstance } from 'axios';
import { getFromLocalStorage } from './getFromLocalStorage';

export const createApi = (withToken?: boolean, contentType?: string): AxiosInstance => {
  const headers: Partial<AxiosHeaders> = {};
  if (withToken) {
    headers['Authorization'] = `Bearer ${getFromLocalStorage('token')}`;
  }
  if (contentType) {
    headers['content-type'] = contentType;
  }

  return axios.create({ baseURL: 'http://localhost:8080/', headers: headers });
};
