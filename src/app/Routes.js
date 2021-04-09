import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Employees } from '../components/Employees';
import { Worklog } from '../components/Worklog';
import { Error404 } from '../components/Error404';

export const PATH = {
  EMPLOYEES: '/employees',
  WORKLOG: '/worklog',
  ERROR_404: '/error404',
};

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Redirect to={PATH.EMPLOYEES} />} />

        <Route path={PATH.EMPLOYEES} render={() => <Employees />} />
        <Route path={PATH.WORKLOG} render={() => <Worklog />} />
        <Route path={PATH.ERROR_404} render={() => <Error404 />} />

        <Redirect from="*" to={PATH.ERROR_404} />
      </Switch>
    </>
  );
};
