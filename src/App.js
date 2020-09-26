import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styles from "./style";
import { withStyles } from "@material-ui/core";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import { connect } from "react-redux";
import { SET_TOKEN } from "./redux/constants/courseConstant";
import Header from "./components/Header";
import Wrapper from "./HOCs/wrapper";
import Checkout from "./pages/Checkout";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Detail from "./pages/Detail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    if (localStorage.getItem("accessToken")) {
      this.props.dispatch({
        type: SET_TOKEN,
        payload: localStorage.getItem("accessToken"),
      });
    }
  }
}

export default withStyles(styles)(connect()(App));
