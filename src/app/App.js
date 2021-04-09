import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from '../components/Header';
import { Main } from '../components/Main';

export const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Main />
      </Router>
    </div>
  );
};
