import React from 'react';
import {
  AppBar,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    position: 'relative',
  },
  menuButton: {
    marginRight: theme.spacing(2),
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

  const loading = useSelector((state) => state.app.loading);

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
