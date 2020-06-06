import { useEffect, useState } from 'react';
import { axiosFetch } from '../API/axios';

export const useFetch = (url, ...options) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axiosFetch(url, options);
      const data = await response.json();
      if (data) setData(data);
    })();
  }, []);

  return { data };
};
