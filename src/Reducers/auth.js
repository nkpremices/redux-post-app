import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../actions/types';

const initialState = {
  data: {},
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: undefined,
        data: action.payload
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: undefined,
        data: action.payload
      };

    case LOGIN_ERROR:
      return {
        ...state,
        data: undefined,
        error: action.payload
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        data: undefined,
        error: action.payload
      };
    default:
      return state;
  }
};
