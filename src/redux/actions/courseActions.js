import { connector } from "../../configs/restConnector";
import { GET_LIST_USER, GET_DETAIL_COURSE } from "../constants/courseConstant";
export const getListCourse = () => {
  return (dispatch) => {
    //   call api
    connector({
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: GET_LIST_USER,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getDetailCourse = (maKhoaHoc) => {
  return (dispatch) => {
    //   call api
    connector({
      url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: GET_DETAIL_COURSE,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
