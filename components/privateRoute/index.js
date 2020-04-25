import React, { useContext } from 'react';
import { widthRouter } from 'next/router';
import { ContextAuth } from '../../context/AuthContext'

const PrivateRoute = ({ component: Component, ...props}) => {

  const { contextAuth } = useContext(ContextAuth);
  const { auth, getUser } = contextAuth;

  return(<h3>boo</h3>    
  )
}

PrivateRoute.getInitialProps = async (ctx) => {
  const { Component, router, ctx} = ctx

  console.log(Component, router, ctx);
}

export default PrivateRoute;