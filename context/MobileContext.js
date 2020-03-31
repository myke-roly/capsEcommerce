import React, { createContext, useState, useEffect } from 'react';

export const ContextMobile = createContext();
const MobileContext = props => {
  const [mobile, setMobile] = useState(false);
  const [modeMobile, setModeMobie] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth < 900 ? true : false);
    function rezise(e) {
      setMobile(e.target.innerWidth < 900 ? true : false);
    }

    window.addEventListener('resize', rezise);
    return () => window.removeEventListener('resize', rezise);
  }, []);

  return (
    <ContextMobile.Provider value={{ 
      mobile, 
      modeMobile, 
      getModeMobile: (mobile) => setModeMobie(mobile) 
    }}>
      {props.children}
    </ContextMobile.Provider>
  );
};

export default MobileContext;
