import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import useStyles from './LoginForm.style';

// const apiUrl = process.env.REACT_APP_API_URL;

interface submitValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const initialValues: submitValues = {
    'username': '',
    'password': '',
  }

  const loginSubmit = async (values: submitValues, actions: FormikHelpers<submitValues>) => {
    console.log({ values });
    try {
      axios.post('http://localhost:8000/login', values)
      actions.setSubmitting(false);
      actions.resetForm();
    } catch (error) {
      actions.setSubmitting(false);
    }
  }

  const handleCancle = () => {
    navigate('/');
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={loginSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={classes.form}>
            <Field
              id="username"
              name="username"
              placeholder="User Name"
              as={TextField}
              className={classes.textfield}
            />
            <Field
              id="password"
              name="password"
              placeholder="Password"
              as={TextField}
              className={classes.textfield}
            />
            <Button
              onClick={handleCancle}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;