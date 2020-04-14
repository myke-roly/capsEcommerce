import React, { createContext, useState, useEffect } from 'react';

export const ContextMobile = createContext();
const MobileContext = props => {
  const [modeMobile, setModeMobie] = useState(true);
  
  useEffect(() => {
    setModeMobie(window.innerWidth < 900 ? true : false);
    function rezise(e) {
      setModeMobie(e.target.innerWidth < 900 ? true : false);
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
