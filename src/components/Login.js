import React from 'react';
import keycloak from '../config/keycloak';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
};

export default Login;