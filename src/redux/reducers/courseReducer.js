import { GET_LIST_USER, GET_DETAIL_COURSE } from "../constants/courseConstant";
const initialState = {
  listCourse: [],
  detailCourse: {},
};

const courseReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_LIST_USER: {
      state.listCourse = actions.payload;
      return { ...state };
    }
    case GET_DETAIL_COURSE: {
      state.detailCourse = actions.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default courseReducer;
