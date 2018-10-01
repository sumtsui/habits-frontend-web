import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Habit from './Habit/Habit';
import Grow from "@material-ui/core/Grow";

const styles = theme => ({
  drawerHeader: {
    ...theme.mixins.toolbar,
  },
});

const Home = props => {
  const { classes, habits, transition } = props;
  return (
    <Grow in={transition}>
    <main>
      <div className={classes.drawerHeader} />
      {habits.map(habit => 
        <Habit
          habit={habit}
          key={habit._id}
        />
      )}
    </main>
    </Grow>
  )
}

export default withStyles(styles)(Home);