import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Worklog } from './Worklog';
import { fetchWorklogAsync } from '../../store/appReducer';

export const WorklogContainer = () => {
  const worklog = useSelector((state) => state.app.worklog);
  const dispatch = useDispatch();
  const { id } = useParams();

  const titles = [
    { id: 'from', label: 'От', minWidth: 100 },
    { id: 'to', label: 'До', minWidth: 100 },
  ];

  useEffect(() => {
    dispatch(fetchWorklogAsync());
  }, [dispatch]);

  const worklogWithViolation = worklog.map((item) => {
    const period = new Date(item.to).getTime() + 1000;

    const staff = worklog.filter(
      ({ from, to }) =>
        new Date(from).getTime() <= period && new Date(to).getTime() > period,
    );

    return { ...item, violation: staff.length < 3 };
  });

  const filteredWorklog = worklogWithViolation.reduce((acc, item) => {
    if (item.employee_id === Number(id)) {
      const { id, from, to, violation } = item;

      return [...acc, { id, from, to, violation }];
    } else {
      return acc;
    }
  }, []);

  return <Worklog worklog={filteredWorklog} titles={titles} />;
};
