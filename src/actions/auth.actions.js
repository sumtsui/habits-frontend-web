import * as types from './ActionTypes';

export const onTextChanged = e => ({
  type: types.AUTH_TEXT_CHANGED,
  payload: e
});

export const loginUser = (data) => {
  return (dispatch) => {
    dispatch({ type: types.AUTH_LOGIN_START });
    fetch('http://localhost:3000/api/v1/users/log-in', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, same-origin, *omit
      headers: { "Content-Type": "application/json; charset=utf-8" },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then(json => {
      if (json.error) dispatch({ type: types.AUTH_LOGIN_FAIL, payload: json.error });
      else dispatch({ type: types.AUTH_LOGIN_SUCCESS });
    })
    .catch(console.log);
  }
};

export const logoutUser = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/log-out', { credentials: "include" })
      .then(res => res.json())
      .then(json => dispatch({ type: types.AUTH_LOGOUT_SUCCESS }))
      .catch(console.log);
  }
}


