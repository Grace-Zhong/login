import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  error_msg: {
    fontSize: '12px',
    color: 'red',
  },
  textfield: {
    margin: '10px 0px',
  }
});

export default useStyles;