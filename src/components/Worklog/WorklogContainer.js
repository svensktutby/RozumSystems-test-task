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

  const filteredWorklog = worklog.reduce((acc, item) => {
    if (item.employee_id === Number(id)) {
      const { id, from, to } = item;

      return [...acc, { id, from, to }];
    } else {
      return acc;
    }
  }, []);

  return <Worklog worklog={filteredWorklog} titles={titles} />;
};
