import React, { useEffect } from 'react';
import {
  AppBar,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import { setLoading } from '../../store/appReducer';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    position: 'relative',
  },
  linearProgress: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

export const Header = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch, loading]);

  return (
    <header className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hospital Department
          </Typography>
        </Toolbar>

        {loading && <LinearProgress className={classes.linearProgress} />}
      </AppBar>
    </header>
  );
};
