import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Box, Button, withStyles } from "@material-ui/core";
import LogoImg from "./assets/img/logo-coral";
import style from "./style";
import { FormatLineSpacing } from "@material-ui/icons";
import Category from "./Category";
import Search from "./Search";
const Header = (props) => {
  const classes = props.classes;
  return (
    <AppBar position="static" boxShadow={0}>
      <Toolbar>
        <Box display="flex" alignItems="center" className={classes.header}>
          <NavLink to="/" className={classes.logo}>
            <LogoImg />
          </NavLink>

          <Category />
          <Search />
          <NavLink to='/about' className={classes.about}>Learn more about us</NavLink>
          <Button
            variant="outlined"
            color="primaryDark"
            className={classes.button}
          >
            Sign in
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Sign up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(withStyles(style, { withTheme: true })(Header));
