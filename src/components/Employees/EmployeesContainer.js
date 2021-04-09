import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sortArrayAlphabetically } from '../../utils/sorting';
import { Employees } from './Employees';
import { fetchEmployeesAsync } from '../../store/appReducer';

export const EmployeesContainer = () => {
  const employees = useSelector((state) => state.app.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployeesAsync());
  }, [dispatch]);

  const sortedEmployees = sortArrayAlphabetically(employees, 'lastName');

  return <Employees employees={sortedEmployees} />;
};
