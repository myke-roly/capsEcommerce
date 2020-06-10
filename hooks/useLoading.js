import { useState } from 'react';

export const useLoading = () => {
  const [loading, setLoading] = useState(true);

  function handleLoading() {
    setLoading(!loading);
  }

  return { loading, handleLoading };
};
