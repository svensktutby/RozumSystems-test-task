import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    '@global': {
      body: {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    root: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: `calc(100vh - 56px)`,
      '@media (min-width:600px)': {
        height: `calc(100vh - 64px)`,
      },
      color: theme.palette.grey['50'],
    },
    title: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(2),
      textAlign: 'center',
    },
    text: {
      textAlign: 'center',
    },
    footer: {
      marginTop: 'auto',
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    footerText: {
      fontSize: '1.2rem',
    },
  };
});

export const Error404 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography
          variant="h2"
          component="h1"
          color="inherit"
          className={classes.title}
        >
          404 - Page not&nbsp;found
        </Typography>
        <Typography
          variant="h2"
          component="p"
          color="inherit"
          className={classes.text}
        >
          —<span>Uh oh.</span> <span>¯\_(ツ)_/¯</span>—
        </Typography>
      </div>

      <footer className={classes.footer}>
        <Typography
          variant="body1"
          color="inherit"
          className={classes.footerText}
        >
          Take me back to:&nbsp;
          <Link color="inherit" component={RouterLink} to="/">
            home page
          </Link>
        </Typography>
      </footer>
    </div>
  );
};
