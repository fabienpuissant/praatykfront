import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black"
  },
  appBar:{
      background: "linear-gradient(45deg, transparent, black)"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const mobile = useMediaQuery(theme => theme.breakpoints.down('xs'));

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            {mobile &&
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            }
        <img alt= "logo" src="./assets/logo/logo.svg" style={{width: "50px", margin: "2%"}}/>
          <Typography variant="h6" className={classes.title}>
                Praatyk
          </Typography>
          <Button color="inherit">
                <AccountCircleIcon style={{fill: "white"}}/>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}