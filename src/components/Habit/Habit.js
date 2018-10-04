import React from 'react';
import Data from './Data';
import Header from './Header';
import Week from './Week';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const styles = {
  root: {
    margin: '1em .5em'
  },
};

const Habit = props => {
  const { habit, classes } = props;
  // const today = new Date().getDate() === 0 ? 7 : new Date().getDate();
  // const recorded = habit.thisWeek.includes(today) ? true : false;

  return (
    <div className={classes.root}>
      <Header
        title={habit.title}
        _id={habit._id}
        isGood={habit.isGood}
        recorded={habit.recorded}
      />
      <Week
        isGood={habit.isGood}
        thisWeek={habit.thisWeek}
        recorded={habit.recorded}
      />
      <Data
        lastWeek={habit.lastWeek}
        thisMonth={habit.thisMonth}
        lastMonth={habit.lastMonth}
      />
      <Divider />
    </div>
  )
}

export default withStyles(styles)(Habit);