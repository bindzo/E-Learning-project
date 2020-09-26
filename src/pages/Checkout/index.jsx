import React, { Component } from "react";
import wrapper from "../../HOCs/functionWrapper";
import { connect } from "react-redux";

class Checkout extends Component {
  render() {
    return (
      <div>
        {this.props.accessToken}
        <h1>Checkout</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accessToken: state.auth.token,
    courseList: state.course.listCourse,
  };
};

export default connect(mapStateToProps)(wrapper(Checkout));
