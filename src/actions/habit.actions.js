import * as types from './ActionTypes';
import config from '../config';
console.log('config.route', config.route);
console.log('HEROKU', process.env.REACT_APP_HEROKU);

export const getHabits = () => {
  return (dispatch) => {
    dispatch({ type: types.HABIT_ASYNC_START });
    fetch(`${config.route}/api/v1/habits/all`, { credentials: "include" })
      .then(res => res.json())
      .then(json => {
        // Sort habits by pos
        if (json.habits) {
          json.habits.sort((a, b) => a.pos > b.pos);
          dispatch({
            type: types.HABIT_GET_ALL_DONE,
            payload: json.habits
          })  
        }
      })
      .catch(err => dispatch({ type: types.HABIT_ASYNC_FAIL, payload: err.message }));
  }
}

export const addNewHabit = (data, history) => {
  return (dispatch) => {
    dispatch({ type: types.HABIT_ASYNC_START });
    fetch(`${config.route}/api/v1/habits/new`, {
      method: "POST",
      mode: "cors", 
      credentials: "include", 
      headers: { "Content-Type": "application/json; charset=utf-8" },
      // cache: "no-cache", 
      // redirect: "follow", 
      // referrer: "no-referrer", 
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        if (json.error) dispatch({ type: types.HABIT_ASYNC_FAIL, payload: json.error });
        else {
          dispatch({ type: types.HABIT_ADD_NEW_DONE })
          history.goBack();
        }
      })
      .catch(err => dispatch({ type: types.HABIT_ASYNC_FAIL, payload: err.message }));
  }
}

export const saveChange = (data, history) => {
  
  // Get user-rearranged habit list index 
  const habits = data.map((habit, index) => ({ title: habit.title, pos: index }));

  return (dispatch) => {
    dispatch({ type: types.HABIT_ASYNC_START });
    fetch(`${config.route}/api/v1/habits/save-all`, {
      method: "PUT",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ habits })
    })
      .then(res => res.json())
      .then(json => {
        console.log('save', json)
        dispatch({ type: types.HABIT_SAVE_CHANGE_DONE })
      })
      .catch(err => dispatch({ type: types.HABIT_ASYNC_FAIL, payload: err.message }));
  }
}

export const recordHabit = (target, id) => {
  return (dispatch) => {
    dispatch({ type: types.HABIT_RECORD_TOGGLED, payload: id });
    dispatch({ type: types.HABIT_ASYNC_START });
    fetch(`${config.route}/api/v1/habits/${id}/records/new`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then(res => res.json())
      .then(json => {
        dispatch({ 
          type: types.HABIT_RECORD_DONE,
          payload: { bool: target.checked, id }
        })
      })
      .catch(err => dispatch({ type: types.HABIT_ASYNC_FAIL, payload: err.message }));
  }
}

export const undoRecordHabit = (target, id) => {
  
  return (dispatch) => {
    dispatch({ type: types.HABIT_RECORD_TOGGLED, payload: id });
    dispatch({ type: types.HABIT_ASYNC_START });
    fetch(`${config.route}/api/v1/habits/${id}/records/`, {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then(res => res.json())
      .then(json => {
        target.disabled = false;
        dispatch({ 
          type: types.HABIT_RECORD_UNDO_DONE,
          payload: { bool: target.checked, id }
        })
      })
      .catch(err => dispatch({ type: types.HABIT_ASYNC_FAIL, payload: err.message }));
  }
}

export const deleteHabit = id => {
  return (dispatch) => {
    dispatch({ type: types.HABIT_ASYNC_START, payload: id });
    fetch(`${config.route}/api/v1/habits/${id}/`, {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: types.HABIT_DELETE_DONE,
          payload: id
        })
      })
      .catch(err => dispatch({ type: types.HABIT_ASYNC_FAIL, payload: err.message }));
  }
}