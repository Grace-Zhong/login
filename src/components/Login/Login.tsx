import { Typography, Box, Snackbar, Alert } from '@mui/material';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import useStyles from './Login.style';

const Login = () => {

  const classes = useStyles();
  const [openSucessMsg, setOpenSuccessMsg] = useState(false);
  
  const handleCloseSuccessMsg = () => {
    setOpenSuccessMsg(false);
  };

  return (
    <Box className={classes.root}>
      <Typography
        gutterBottom
        align="center"
        variant="h3"
      >
        Login
      </Typography>
      <LoginForm
        setOpenSucessMsg={setOpenSuccessMsg}
      />
      <Snackbar
        open={openSucessMsg}
        onClose={handleCloseSuccessMsg}
      >
        <Alert severity="success">
          Login successful!
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default Login;