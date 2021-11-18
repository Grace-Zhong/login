import React from 'react';
import Header from '../Header/Header';
import useStyles from './Home.style';

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.root}>
        Home Page
      </div>
    </div>
  );
};
export default Home;
