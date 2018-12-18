import axios from "axios";

import * as actionTypes from "./actionTypes";
import * as base from "../../config/const";

export const forgotFail = error => {
  return {
    type: actionTypes.USERS_REQUEST_FAIL,
    error: error
  };
};
export const requestStart = () => {
  return {
    type: actionTypes.USERS_REQUEST_START
  };
};
export const requestSuccess = (usersList) => {
  return {
    type: actionTypes.USERS_REQUEST_SUCCESS,
    usersList
  };
};
export const users = () => {
  return (dispatch, getState) => {
	  console.log("innnn");
    dispatch(requestStart());
    let url = base.BASE_URL+ "admin/user-lists";
    axios
      .get(url)
      .then(response => {
		  console.log(response.data.result)
		  dispatch(requestSuccess(response.data.result));
	  })
      .catch(err => {
        dispatch(forgotFail(err.response.data.error));
      });
  };
};
