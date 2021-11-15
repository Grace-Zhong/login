import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';

// const apiUrl = process.env.REACT_APP_API_URL;

const LoginForm = () => {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      axios.post('https://localhost:3000/users', {
        // first_name: values.username,
        // password: values.password,
        first_name: 'grace',
        password: 'grace',
    })
      .then(res => {
        alert('success');
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
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