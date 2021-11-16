import { Button, TextField } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import ILoginValues from '../../../Interfaces/ILoginValues';
import { login } from '../../../utils/apiUtils';
import useStyles from './LoginForm.style';

const LoginForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const initialValues: ILoginValues = {
    'username': '',
    'password': '',
  }

  const loginSubmit = async (values: ILoginValues, actions: FormikHelpers<ILoginValues>) => {
    console.log({ values });
    try {
      const loginResponse = await login(values);
      if (loginResponse.status === 200) {
        alert('success');
        actions.setSubmitting(false);
        actions.resetForm();
      }
    } catch (err : any) {
      actions.setSubmitting(false);
      console.log(err);
    }
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
              onClick={() => navigate('/')}
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