import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { EmployeesContainer } from '../components/Employees/EmployeesContainer';
import { WorklogContainer } from '../components/Worklog/WorklogContainer';
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

        <Route path={PATH.EMPLOYEES} render={() => <EmployeesContainer />} />
        <Route
          path={`${PATH.WORKLOG}/:id`}
          render={() => <WorklogContainer />}
        />
        <Route path={PATH.ERROR_404} render={() => <Error404 />} />

        <Redirect from="*" to={PATH.ERROR_404} />
      </Switch>
    </>
  );
};
