import * as types from './ActionTypes';
import config from '../config';

export const onTextChanged = e => ({
  type: types.AUTH_TEXT_CHANGED,
  payload: e
});

export const loginUser = (e, data) => {
  e.preventDefault();
  return (dispatch) => {
    dispatch({ type: types.AUTH_ASYNC_START });
    fetch(`${config.route}/api/v1/users/log-in`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      credentials: "include", // include, same-origin, *omit
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then(json => {
      if (json.error) dispatch({ type: types.AUTH_ASYNC_FAIL, payload: json.error });
      else dispatch({ type: types.AUTH_LOGIN_DONE });
    })
    .catch(err => dispatch({ type: types.HABIT_ASYNC_FAIL, payload: err.message }));
  }
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: types.AUTH_ASYNC_START });
    fetch(`${config.route}/api/v1/users/log-out`, { credentials: "include" })
      .then(res => res.json())
      .then(json => dispatch({ type: types.AUTH_LOGOUT_DONE }))
      .catch(err => dispatch({ type: types.HABIT_ASYNC_FAIL, payload: err.message }));
  }
}

export const signupUser = (e, data) => {
  e.preventDefault();
  return (dispatch) => {
    dispatch({ type: types.AUTH_ASYNC_START });
    fetch(`${config.route}/api/v1/users/sign-up`, {
      method: "POST", 
      mode: "cors", 
      credentials: "include",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(json => {
        if (json.error) dispatch({ type: types.AUTH_ASYNC_FAIL, payload: json.error });
        else dispatch({ type: types.AUTH_SIGNUP_DONE });
      })
      .catch(err => dispatch({ type: types.HABIT_ASYNC_FAIL, payload: err.message }));
  }
}


