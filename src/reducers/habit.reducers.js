import {
  HABIT_GET_ALL_HABITS,
  HABIT_GET_ALL_HABITS_START
} from '../actions/ActionTypes';

import { getThisWeekData } from '../utils';

const initialState = {
  habits: [],
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case HABIT_GET_ALL_HABITS_START:
      return {
        ...state,
        loading: true
      }

    case HABIT_GET_ALL_HABITS:
      const habits = action.payload.map(habit => {
        const dateObjects = getThisWeekData(habit.records);
        habit.thisWeek = dateObjects;
        return habit;
      });
      return {
        ...state,
        habits: habits,
        loading: false
      }
    
    default:
      return state
  }
}