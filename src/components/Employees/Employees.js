import React from 'react';
import PropTypes from 'prop-types';

export const Employees = ({ employees }) => {
  return (
    <section>
      <ul>
        {employees.map((e) => (
          <li key={e.id}>{JSON.stringify(e)}</li>
        ))}
      </ul>
    </section>
  );
};

Employees.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      middleName: PropTypes.string.isRequired,
      birthDate: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ),
};
