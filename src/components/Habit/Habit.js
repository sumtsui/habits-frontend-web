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
  return (
    <div className={classes.root}>
      <Header
        title={habit.title}
        isGood={habit.isGood}
      />
      <Week
        isGood={habit.isGood}
        thisWeek={habit.thisWeek}
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