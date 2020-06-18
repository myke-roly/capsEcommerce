import { useEffect, useState } from 'react';
import { axiosFetch } from '../API/axios';

export const useFetch = (url, ...options) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axiosFetch(url, ...options);
        setData(response.data);
      })();
      }, []);
  return { data: data || [] };
};
