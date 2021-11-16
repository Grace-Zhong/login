import { Button, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Toolbar>
      <Button>
        <Link to='/'>
          Home
        </Link>
      </Button>
      <Button>
        <Link to='/login'>
          Login
        </Link>
      </Button>
    </Toolbar>
  );
};
export default Header;