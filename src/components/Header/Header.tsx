import { Button, Toolbar, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import IMenuItem from '../../common/Interfaces/IMenuItem';
import ISubMenuItem from '../../common/Interfaces/ISubMenuItem';
import useStyles from './Header.style';
import menuData from './menuData.json';

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenuBtn = (item:IMenuItem) => {
    if (item.path) {
      return (
        <Link to={item.path} key={item.id} className={classes.link}>
          <Button>
          {item.name}
          </Button>
        </Link>
      )
    } else {
      return (
        <div key={item.id}>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {item.name}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {item.subMenu?.map((subItem:ISubMenuItem) => (
              <MenuItem onClick={handleClose} key={subItem.id}>
                <Link to={subItem.path} className={classes.link}>
                  <Button>{subItem.name}</Button>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </div>
      )
    }
}

  return (
    <div>
      <Toolbar>
        {menuData.map((item:IMenuItem) => renderMenuBtn(item))}
      </Toolbar>
    </div>
  );
};
export default Header;