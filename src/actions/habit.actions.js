import * as types from './ActionTypes';

export const getHabits = () => {
  return (dispatch) => {
    dispatch({ type: types.HABIT_GET_ALL_HABITS_START });
    fetch('http://localhost:3000/api/v1/habits/all', { credentials: "include" })
      .then(res => res.json())
      .then(json => {
        setTimeout(() => {
          dispatch({
            type: types.HABIT_GET_ALL_HABITS,
            payload: json.habits
          })  
        }, 1000)
      })
      .catch(console.log);
  }
}