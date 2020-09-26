import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../redux/actions/userActions";
import wrapper from "../../HOCs/functionWrapper";
class SignUp extends Component {
  state = {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: "GP01",
    email: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(signUp(this.state));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Tài Khoản</label>
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
            name="taiKhoan"
          />
        </div>
        <div className="form-group">
          <label>Mật Khẩu</label>
          <input
            type="password"
            className="form-control"
            onChange={this.handleChange}
            name="matKhau"
          />
        </div>
        <div className="form-group">
          <label>Họ Tên</label>
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
            name="hoTen"
          />
        </div>
        <div className="form-group">
          <label>Số Điện Thoại</label>
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
            name="soDT"
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={this.handleChange}
            name="email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default connect()(wrapper(SignUp));
