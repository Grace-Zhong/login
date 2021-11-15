import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import React from 'react';

const LoginForm = () => {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >
      <TextField
        label="username"
        onChange={formik.handleChange}
        value={formik.values.username}
        margin="normal"
      />
      <TextField
        label="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        margin="normal"
      />
      <Button>Cancel</Button>
      <Button type="submit">Submit</Button>
    </Box>
  );
};
export default LoginForm;