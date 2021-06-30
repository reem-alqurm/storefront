import React from 'react';
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import { StylesProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  name: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function Header(props) {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" className={classes.name}>
          <Button href="/">OUR STORE</Button>
        </Typography>
        {/* <Button href="/cart" color="inherit">Cart ({props.cart.cart.length})</Button> */}
        <NavLink to="/cart">Cart({props.cart.cart.length})</NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Header)