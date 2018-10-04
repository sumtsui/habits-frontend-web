import * as types from './ActionTypes';

export const getHabits = () => {
  return (dispatch) => {
    dispatch({ type: types.HABIT_GET_ALL_START });
    fetch('http://localhost:3000/api/v1/habits/all', { credentials: "include" })
      .then(res => res.json())
      .then(json => {
        // Sort habits by pos
        json.habits.sort((a, b) => a.pos > b.pos);
        dispatch({
          type: types.HABIT_GET_ALL_DONE,
          payload: json.habits
        })  
      })
      .catch(console.log);
  }
}

export const addNewHabit = (data, history) => {
  return (dispatch) => {
    dispatch({ type: types.HABIT_ADD_NEW_START });
    fetch('http://localhost:3000/api/v1/habits/new', {
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
        // if (json.error) console.log(json.error);
        dispatch({ type: types.HABIT_ADD_NEW_DONE })
        history.goBack();
      })
      .catch(console.log);
  }
}

export const saveChange = (data, history) => {
  
  // Get user sorted habit list index 
  const habits = data.map((habit, index) => ({ title: habit.title, pos: index }));

  return (dispatch) => {
    dispatch({type: types.HABIT_SAVE_CHANGE_START});
    fetch('http://localhost:3000/api/v1/habits/save-all', {
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
        history.goBack();
      })
      .catch(console.log);
  }
}

export const recordHabit = id => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/habits/${id}/records/new`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then(res => res.json())
      .then(json => {
        dispatch({ 
          type: types.HABIT_RECORD,
          payload: id
        })
      })
      .catch(console.log);
  }
}

export const undoRecordHabit = id => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/habits/${id}/records/`, {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then(res => res.json())
      .then(json => {
        dispatch({ 
          type: types.HABIT_RECORD_UNDO,
          payload: id
        })
      })
      .catch(console.log);
  }
}

export const deleteHabit = id => {
  return (dispatch) => {
    dispatch({ type: types.HABIT_START_ASYNC });
    fetch(`http://localhost:3000/api/v1/habits/${id}/`, {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: types.HABIT_DELETE_DONE
        })
      })
      .catch(console.log);
  }
}