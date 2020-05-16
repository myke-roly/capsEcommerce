import React, { createContext, useState, useEffect } from 'react';

export const ContextMobile = createContext();
const MobileContext = props => {
  const [modeMobile, setModeMobile] = useState(null);
  
  useEffect(() => {
    setModeMobile(window.innerWidth < 900 ? true : false);
    function rezise(e) {
      setModeMobile(e.target.innerWidth < 900 ? true : false);
    }

    window.addEventListener('resize', rezise);
    return () => window.removeEventListener('resize', rezise);
  }, []);

  return (
    <ContextMobile.Provider value={{ 
      modeMobile,
    }}>
      {props.children}
    </ContextMobile.Provider>
  );
};

export default MobileContext;
