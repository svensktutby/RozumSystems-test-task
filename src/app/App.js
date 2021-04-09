import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { getEmployees, getWorklog } from '../api';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [worklog, setWorklog] = useState([]);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

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
