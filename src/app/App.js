import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { initializeAppAsync } from '../store/appReducer';

const useStyles = makeStyles(() => ({
  circularProgressWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
}));

export const App = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const isInitialized = useSelector((state) => state.app.isInitialized);

  useEffect(() => {
    dispatch(initializeAppAsync());
  }, [dispatch, isInitialized]);

  if (!isInitialized) {
    return (
      <div className={classes.circularProgressWrapper}>
        <CircularProgress size={160} />
      </div>
    );
  }

  return (
    <div>
      <Router>
        <Header />

        <Main />
      </Router>
    </div>
  );
};
