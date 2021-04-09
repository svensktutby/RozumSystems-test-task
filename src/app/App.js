import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { setLoading } from '../store/appReducer';

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch, loading]);

  if (loading) {
    return 'Loading...';
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
