import { Typography, Box, Snackbar, Alert } from '@mui/material';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import useStyles from './Login.style';

const Login = () => {
  const classes = useStyles();
  const [openSuccessMsg, setOpenSuccessMsg] = useState(false);
  const [openFailMsg, setOpenFailMsg] = useState(false);

  const handleCloseSuccessMsg = () => {
    setOpenSuccessMsg(false);
  };

  const handleCloseFailMsg = () => {
    setOpenFailMsg(false);
  };

  return (
    <Box className={classes.root}>
      <Typography gutterBottom align="center" variant="h3">
        Login
      </Typography>
      <LoginForm
        setOpenSuccessMsg={setOpenSuccessMsg}
        setOpenFailMsg={setOpenFailMsg}
      />

      <Snackbar
        open={openSuccessMsg}
        onClose={handleCloseSuccessMsg}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success">Login successful!</Alert>
      </Snackbar>
      <Snackbar
        open={openFailMsg}
        onClose={handleCloseFailMsg}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error">Incorrect username or password!</Alert>
      </Snackbar>
    </Box>
  );
};
export default Login;
