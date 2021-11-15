import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';

// const apiUrl = process.env.REACT_APP_API_URL;

interface submitValues {
  username: string;
  password: string;
}

const LoginForm = () => {
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

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={.object().shape({
      //   email: Yup.string(),
      //   password: Yup.string(),
      // })}
      onSubmit={loginSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            id="username"
            name="username"
            placeholder="User Name"
            as={TextField}
          />
          <Field
            id="password"
            name="password"
            placeholder="Password"
            as={TextField}
          />
          <Button>Cancel</Button>
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