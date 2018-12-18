import * as ActionTypes from "../actions/actionTypes";
import { updateObject } from '../../shared/utility';

const initialState = {
    isAuthenticated: localStorage.getItem('jwtToken') !== null,
    error: null, 
    loading: null,
    usersList: []
};

const requestStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const requestSuccess = (state, action) => {
    return updateObject(state, {
        usersList: action.usersList,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};




const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.USERS_REQUEST_START:
            return requestStart(state, action);
        case ActionTypes.USERS_REQUEST_SUCCESS:
            return requestSuccess(state, action);
        case ActionTypes.USERS_REQUEST_FAIL:
            return authFail(state, action);
        default:
            return state;
    }
};

export default usersReducer;
