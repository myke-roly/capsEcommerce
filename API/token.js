import { axiosFetch } from './axios';

export const authToken = token => {
  if(token) {
    axiosFetch.defaults.headers.common['x-access-token'] = token;
  } else {
    delete axiosFetch.defaults.headers.common['x-access-token'];
  }
};