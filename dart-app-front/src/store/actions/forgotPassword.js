import axios from "axios";

import * as actionTypes from "./actionTypes";
import * as base from "../../config/const";

export const forgotFail = error => {
  return {
    type: actionTypes.FORGOT_FAIL,
    error: error
  };
};
export const forgotStart = () => {
  return {
    type: actionTypes.FORGOT_START
  };
};
export const forgotPassword = email => {
  return (dispatch, getState) => {
    dispatch(forgotStart());
    const forgotData = {
      email: email
    };
    let url = base.BASE_URL;
    axios
      .post(url + "test", forgotData)
      .then(response => {})
      .catch(err => {
        dispatch(forgotFail(err.response.data.error));
      });
  };
};
