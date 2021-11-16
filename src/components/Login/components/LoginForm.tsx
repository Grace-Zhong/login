import { Button, TextField } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import ILoginValues from '../../../common/Interfaces/ILoginValues';
import { login } from '../../../utils/apiUtils';
import useStyles from './LoginForm.style';
import * as Yup from 'yup';

interface IProps {
  setOpenSucessMsg: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenFailMsg: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = ({ setOpenSucessMsg, setOpenFailMsg } : IProps) => {
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
        setOpenSucessMsg(true);
        actions.setSubmitting(false);
        actions.resetForm();
      }
    } catch (err : any) {
      setOpenFailMsg(true);
      actions.setSubmitting(false);
      console.log(err);
    }
  }

  const LoginSchema = Yup.object().shape({
    username: Yup.string().trim()
      .required('Username cannot be empty'),
    password: Yup.string()
      .required('Password cannot be empty'),
  });

  return (
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
            {errors.username && touched.username ? (
            <div className={classes.error_msg}>{errors.username}</div>
            ) : null}
          <Field
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              as={TextField}
              className={classes.textfield}
            />
            {errors.password && touched.password ? (
            <div className={classes.error_msg}>{errors.password}</div>
          ) : null}
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