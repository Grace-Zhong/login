import { Button, TextField } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import ILoginValues from '../../../common/Interfaces/ILoginValues';
import { login } from '../../../utils/apiUtils';
import useStyles from './LoginForm.style';

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
              type="password"
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