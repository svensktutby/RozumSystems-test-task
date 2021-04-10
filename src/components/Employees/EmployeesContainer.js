import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  formatBirthDay,
  sortArrayAlphabetically,
  transformObjectToArrayByKeys,
} from '../../utils/utils';
import { Employees } from './Employees';
import { fetchEmployeesAsync } from '../../store/appReducer';

export const EmployeesContainer = () => {
  const employees = useSelector((state) => state.app.employees);
  const dispatch = useDispatch();

  const titles = [
    { id: 'id', label: 'ID', minWidth: 50 },
    { id: 'lastName', label: 'Фамилия', minWidth: 150 },
    { id: 'firstName', label: 'Имя', minWidth: 150 },
    { id: 'middleName', label: 'Отчество', minWidth: 150 },
    { id: 'birthDate', label: 'Дата рождения', minWidth: 120 },
    { id: 'phone', label: 'Телефон', minWidth: 130 },
  ];

  useEffect(() => {
    dispatch(fetchEmployeesAsync());
  }, [dispatch]);

  const sortingTypes = titles.map((item) => item.id);

  const sortedEmployees = sortArrayAlphabetically(employees, 'lastName').map(
    (item) => {
      const itemWithFormattedBirthDay = {
        ...item,
        birthDate: formatBirthDay(item.birthDate),
      };

      return transformObjectToArrayByKeys(
        itemWithFormattedBirthDay,
        sortingTypes,
      );
    },
  );

  return <Employees employees={sortedEmployees} titles={titles} />;
};
