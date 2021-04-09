import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  sortArrayAlphabetically,
  transformObjectToArrayByKeys,
} from '../../utils/sorting';
import { Employees } from './Employees';
import { fetchEmployeesAsync } from '../../store/appReducer';

export const EmployeesContainer = () => {
  const employees = useSelector((state) => state.app.employees);
  const dispatch = useDispatch();

  const titles = [
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'firstName', label: 'Имя', minWidth: 100 },
    { id: 'middleName', label: 'Отчество', minWidth: 100 },
    { id: 'lastName', label: 'Фамилия', minWidth: 100 },
    { id: 'birthDate', label: 'Дата рождения', minWidth: 100 },
    { id: 'phone', label: 'Телефон', minWidth: 100 },
  ];

  useEffect(() => {
    dispatch(fetchEmployeesAsync());
  }, [dispatch]);

  const sortingTypes = titles.map((item) => item.id);

  const sortedEmployees = sortArrayAlphabetically(employees, 'lastName').map(
    (item) => {
      return transformObjectToArrayByKeys(item, sortingTypes);
    },
  );

  return <Employees employees={sortedEmployees} titles={titles} />;
};
