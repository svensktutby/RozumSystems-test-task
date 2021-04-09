import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Link,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(4),
  },
  paper: {
    width: '100%',
  },
}));

export const Employees = ({ employees, titles }) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container>
        <Paper className={classes.paper}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {titles.map((t) => (
                    <TableCell key={t.id} style={{ minWidth: t.minWidth }}>
                      {t.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((e) => {
                  const [[, key]] = e;

                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                      {e.map((item) => {
                        const [key, value] = item;

                        return (
                          <TableCell key={key}>
                            {key === 'lastName' ? (
                              <Link component={RouterLink} to={'/'}>
                                {value}
                              </Link>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </section>
  );
};

Employees.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      ),
    ),
  ),
  titles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      minWidth: PropTypes.number.isRequired,
    }),
  ),
};
