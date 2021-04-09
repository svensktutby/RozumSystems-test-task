import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import { PATH } from '../../app/Routes';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(4),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(4),
  },
  headCell: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

export const Worklog = ({ worklog, titles }) => {
  const classes = useStyles();
  console.log(classes.head);

  return (
    <section className={classes.root}>
      <Container>
        <Paper className={classes.paper}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead className={classes.head}>
                <TableRow>
                  {titles.map((t) => (
                    <TableCell key={t.id} style={{ minWidth: t.minWidth }}>
                      {t.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {worklog.map((log) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={log.id}>
                      {Object.entries(log).map((item) => {
                        const [key, value] = item;

                        return (
                          key !== 'id' && (
                            <TableCell key={key}>{value}</TableCell>
                          )
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to={PATH.EMPLOYEES}
        >
          Return home
        </Button>
      </Container>
    </section>
  );
};

Worklog.propTypes = {
  worklog: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ),
  titles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      minWidth: PropTypes.number.isRequired,
    }),
  ),
};
