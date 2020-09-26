import React, { Component } from "react";
import { Typography, Box } from "@material-ui/core";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Box textAlign="right" bgcolor="black" py={2} px={3}>
        <NavLink to="/" activeStyle={{ color: "pink" }} exact>
          Home
        </NavLink>

        {this.props.isLogin ? (
          <Typography
            onClick={() => {
              this.props.history.push("/checkout");
            }}
            style={{ marginLeft: 20 }}
            color="primary"
            variant="subtitle1"
          >
            Hello,Hom mi.
          </Typography>
        ) : (
          <>
            <NavLink activeStyle={{ color: "pink" }} to="/signin">
              Sign in
            </NavLink>
            <NavLink activeStyle={{ color: "pink" }} to="/signup">
              Sign up
            </NavLink>
          </>
        )}
      </Box>
    );
  }
}

export default withRouter(connect((state) => ({
  isLogin: !!state.auth.token,
}))(Header));
