import { Button, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Toolbar
      sx={{
        backgroundColor: 'rgba(138, 138, 138, 0.2)'
      }}
    >
      <Button
        sx={{
          fontSize: '23px'
        }}
      >
        <Link to='/'>
          Home
        </Link>
      </Button>
      <Button
        sx={{
          fontSize: '23px',
          paddingLeft: '30px',
        }}
      >
        <Link to='/login'>
          Login
        </Link>
      </Button>
    </Toolbar>
  );
};
export default Header;