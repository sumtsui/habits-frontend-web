import {
  HABIT_START_ASYNC,
  HABIT_GET_ALL_DONE,
  HABIT_GET_ALL_START,
  HABIT_ADD_NEW_DONE,
  HABIT_ADD_NEW_START,
  HABIT_SAVE_CHANGE_START,
  HABIT_SAVE_CHANGE_DONE,
  HABIT_RECORD,
  HABIT_RECORD_UNDO,
  HABIT_DELETE_DONE
} from '../actions/ActionTypes';

import { 
  getThisWeekData, 
  getLastWeekData, 
  getLastMonthData, 
  getThisMonthData
} from '../utils';

const initialState = {
  habits: [],
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case HABIT_GET_ALL_START:
      return {
        ...state,
        loading: true
      }

    case HABIT_START_ASYNC:
      return {
        ...state,
        loading: true
      }

    case HABIT_GET_ALL_DONE:
      const dayOftheWeek = (new Date().getDay() === 0) ? 7 : new Date().getDay();
      const habits = action.payload.map(habit => ({
        ...habit,
        thisWeek: getThisWeekData(habit.records),
        lastWeek: getLastWeekData(habit.records),
        thisMonth: getThisMonthData(habit.records),
        lastMonth: getLastMonthData(habit.records),
        recorded: getThisWeekData(habit.records).includes(dayOftheWeek) ? true : false
      }));
      return {
        ...state,
        habits: habits,
        loading: false
      }

    case HABIT_ADD_NEW_START:
      return {
        ...state,
        loading: true,
      }

    case HABIT_ADD_NEW_DONE:
      return {
        ...state,
        loading: false,
      }

    case HABIT_SAVE_CHANGE_START: {
      return {
        ...state,
        loading: true
      }
    }
    
    case HABIT_SAVE_CHANGE_DONE:
      return {
        ...state,
        loading: false
      }

    case HABIT_RECORD:
      const a = state.habits.map(i => {
        if (i._id === action.payload) i.recorded = true
        return i;
      })
      console.log(a.filter(i => i._id === action.payload))
      return {
        ...state,
        habits: a
      }

    case HABIT_RECORD_UNDO:
      const b = state.habits.map(i => {
        if (i._id === action.payload) i.recorded = false;
        return i;
      })
      console.log(b.filter(i => i._id === action.payload))
      return {
        ...state,
        habits: b
      }

    case HABIT_DELETE_DONE: 
      return {
        ...state,
        loading: false
      }
    
    default:
      return state
  }
}