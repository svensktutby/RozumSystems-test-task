import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sortArrayAlphabetically } from '../../utils/sorting';
import { Employees } from './Employees';

export const EmployeesContainer = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.app.employees);

  const sortedEmployees = sortArrayAlphabetically(employees, 'lastName');

  return <Employees employees={sortedEmployees} />;
};
