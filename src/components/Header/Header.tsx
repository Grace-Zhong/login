import { Button, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import menuData from './menuData.json';

const Header = () => {
  return (
    <Toolbar>
      {menuData.map((item) => (
        <Button key={item.id}>
          <Link to={item.path}>
            {item.name}
          </Link>
        </Button>
      ))}
    </Toolbar>
  );
};
export default Header;