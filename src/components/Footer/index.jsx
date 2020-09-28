
import React, { Component } from "react";
import { Typography, Box } from "@material-ui/core";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Box textAlign="left" bgcolor="grey" py={2} px={3}>
        <Typography >Footer</Typography>
      </Box>
    );
  }
}

export default withRouter(connect()(Footer));
