import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '750px',
    margin: '50px auto',
  },
  error_msg: {
    fontSize: '12px',
    color: 'red',
  },
  textfield: {
    margin: '10px 10px',
  },
});

export default useStyles;
