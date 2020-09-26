import { SET_TOKEN } from "../constants/courseConstant";

const initialState = {
  token: "",
  // profile:null
};
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOKEN: {
      return { ...state, token: payload };
    }
    default:
      return state;
  }
};
export default authReducer;
