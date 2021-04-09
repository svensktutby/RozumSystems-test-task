import React, { useState, useEffect } from 'react';
import { getEmployees, getWorklog } from '../api';

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
      <h1>Hospital department</h1>
    </div>
  );
};
