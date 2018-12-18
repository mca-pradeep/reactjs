import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const forgotStart = (state = {}, action) => {
  return updateObject(state, { error: null, loading: true });
};

const forgotSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const forgotFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export const forgotReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FORGOT_START:
      return forgotStart(state, action);
    case actionTypes.FORGOT_SUCCESS:
      return forgotSuccess(state, action);
    case actionTypes.FORGOT_FAIL:
      return forgotFail(state, action);
    default:
      return state;
  }
};
export default forgotReducer;
