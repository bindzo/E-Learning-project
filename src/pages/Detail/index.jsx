import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetailCourse } from "../../redux/actions/courseActions";
class DetailPage extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Detail Page</h2>
        <img src={this.props.detailCourse.hinhAnh} alt="" />
      </div>
    );
  }
  componentDidMount() {
    const courseId = (this.props.match.params.id)
    this.props.dispatch(getDetailCourse(courseId));
  }
}

const mapStateToProps = (state) => {
  return {
    detailCourse: state.course.detailCourse,
  };
};

export default connect(mapStateToProps)(DetailPage);
