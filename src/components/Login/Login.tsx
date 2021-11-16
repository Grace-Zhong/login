import { Typography, Box } from '@mui/material';
import React from 'react';
import LoginForm from './components/LoginForm';
import useStyles from './Login.style';

const Login = () => {

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography
        gutterBottom
        align="center"
        variant="h3"
      >
        Login
      </Typography>
      <LoginForm />
    </Box>
  );
};
export default Login;