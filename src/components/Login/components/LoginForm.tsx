import { Button, TextField, Snackbar, Alert } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import ILoginValues from '../../../common/Interfaces/ILoginValues';
import { login } from '../../../utils/apiUtils';
import useStyles from './LoginForm.style';
import * as Yup from 'yup';
import { Box } from '@mui/system';

const LoginForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [openSuccessMsg, setOpenSuccessMsg] = useState(false);
  const [openFailMsg, setOpenFailMsg] = useState(false);

  const handleCloseSuccessMsg = () => {
    setOpenSuccessMsg(false);
  };

  const handleCloseFailMsg = () => {
    setOpenFailMsg(false);
  };

  const initialValues: ILoginValues = {
    username: '',
    password: '',
  };

  const loginSubmit = async (
    values: ILoginValues,
    actions: FormikHelpers<ILoginValues>
  ) => {
    try {
      const loginResponse = await login(values);
      if (loginResponse.status === 200) {
        setOpenSuccessMsg(true);
        actions.setSubmitting(false);
        actions.resetForm();
      }
    } catch (err: any) {
      setOpenFailMsg(true);
      actions.setSubmitting(false);
    }
  };

  const LoginSchema = Yup.object().shape({
    username: Yup.string().trim().required('Username cannot be empty'),
    password: Yup.string().required('Password cannot be empty'),
  });

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={loginSubmit}
        validationSchema={LoginSchema}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className={classes.form}>
            <Field
              id="username"
              name="username"
              placeholder="User Name"
              as={TextField}
              className={classes.textfield}
            />
            {errors.username && touched.username && (
              <div className={classes.error_msg}>{errors.username}</div>
            )}
            <Field
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              as={TextField}
              className={classes.textfield}
              sx={{ mt: 5 }}
            />
            {errors.password && touched.password && (
              <div className={classes.error_msg}>{errors.password}</div>
            )}
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <Button onClick={() => navigate('/')}>Cancel</Button>
          </Form>
        )}
      </Formik>

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
        autoHideDuration={1000}
      >
        <Alert severity="error">Incorrect username or password!</Alert>
      </Snackbar>
    </Box>
  );
};
export default LoginForm;
