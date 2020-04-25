import React, { useContext } from 'react';
// import { widthRouter } from 'next/router';
// import { ContextAuth } from '../../context/AuthContext'

const Account = () => {

  // const { contextAuth } = useContext(ContextAuth);
  // const { auth, getUser } = contextAuth;

  return(<h3>boo</h3>    
  )
}

Account.getInitialProps = async (appCtx) => {
  const { Component, router, ctx } = appCtx

  console.log(Component, router, ctx);
  return {}
}

export default Account;
