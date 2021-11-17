import { Button, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import IMenuItem from '../../common/Interfaces/IMenuItem';
import menuData from './menuData.json';

const Header = () => {
  const renderMenuBtn = (item:IMenuItem) => (
    <Button key={item.id}>
      <Link to={item.path}>
        {item.name}
      </Link>
    </Button>
  )

  return (
    <Toolbar>
      {menuData.map((item:IMenuItem) => renderMenuBtn(item))}
    </Toolbar>
  );
};
export default Header;