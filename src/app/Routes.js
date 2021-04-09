import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Employees } from '../components/Employees';
import { Worklog } from '../components/Worklog';

export const PATH = {
  EMPLOYEES: '/employees',
  WORKLOG: '/worklog',
};

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Redirect to={PATH.EMPLOYEES} />} />

        <Route path={PATH.EMPLOYEES} render={() => <Employees />} />
        <Route path={PATH.WORKLOG} render={() => <Worklog />} />
      </Switch>
    </>
  );
};
