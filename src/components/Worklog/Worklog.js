import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(4),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(4),
  },
}));

export const Worklog = ({ worklog, titles }) => {
  const classes = useStyles();
  const history = useHistory();

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
          onClick={() => {
            history.goBack();
          }}
        >
          Return back
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
