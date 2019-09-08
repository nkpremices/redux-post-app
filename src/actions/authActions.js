import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './types';

export const signup = data => dispatch => {
  console.log(data);
  fetch('https://banka-heroku.herokuapp.com/api/v2/auth/signup', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 201) {
        dispatch({ type: SIGNUP_SUCCESS, payload: data });
      } else dispatch({ type: SIGNUP_ERROR, payload: { data } });
    });
};

export const login = data => dispatch => {
  fetch('https://banka-heroku.herokuapp.com/api/v2/auth/signin', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 200) dispatch({ type: LOGIN_SUCCESS, payload: data });
      else dispatch({ type: LOGIN_ERROR, payload: { data } });
    });
};
