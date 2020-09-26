import { SET_TOKEN } from "../constants/courseConstant";
import { connector } from "../../configs/restConnector";
export const signUp = (user) => {
  return (dispatch) => {
    //   call api
    connector({
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((res) => {
        alert("Đăng Ký Thành Công");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const signIn = (data,history) => {
  return (dispatch) => {
    connector({
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap ",
      method: "POST",
      data,
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("accessToken", res.data.accessToken);
        dispatch({
          type: SET_TOKEN,
          payload: res.data.accessToken,
        });
        history.replace('/');
      })
      .catch((err) => console.log(err));
  };
};
export default signIn;
