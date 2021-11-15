import { Typography, Box } from '@mui/material';
import React from 'react';
import LoginForm from './components/LoginForm';

const Login = () => {

  return (
    <Box>
      <Typography>
        Login
      </Typography>
      <LoginForm />
    </Box>
  );
};
export default Login;