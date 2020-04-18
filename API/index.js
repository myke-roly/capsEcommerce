import axios from 'axios';

export const axiosFetch = axios.create({
  baseURL: process.env.URL_BASE
});