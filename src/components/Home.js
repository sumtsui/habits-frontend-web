import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Habit from './Habit/Habit'

const styles = theme => ({
  root: {
    width: '100%'
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
  },
});

const Home = props => {
  const {classes, habits} = props;
  return (
    <main className={classes.root}>
      <div className={classes.drawerHeader} />
      {habits.map(habit => 
        <Habit
          habit={habit}
          key={habit.id}
        />
      )}
    </main>
  )
}

export default withStyles(styles)(Home);