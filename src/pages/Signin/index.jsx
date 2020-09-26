import React, { Component } from "react";
import { connect } from "react-redux";
import signIn from "../../redux/actions/userActions";
import {
  Typography,
  Box,
  TextField,
  Button,
  Container,
} from "@material-ui/core";
import Header from "../../components/Header";
import wrapper from "../../HOCs/functionWrapper";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        taiKhoan: "",
        matKhau: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(signIn(this.state.credentials,this.props.history));
  };
  render() {
    return (
      <>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2">
            Sign In
          </Typography>
          <form action="" onSubmit={this.handleSubmit}>
            <Box my={2}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={this.handleChange}
                name="taiKhoan"
              />
            </Box>
            <Box my={2}>
              <TextField
                fullWidth
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={this.handleChange}
                name="matKhau"
              />
            </Box>
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Submit
              </Button>
            </Box>
          </form>
        </Container>
      </>
    );
  }
}

export default connect()(wrapper(SignIn));
