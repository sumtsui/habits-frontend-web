import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Habit from './Habit/Habit';
import Grow from "@material-ui/core/Grow";

const styles = theme => ({
  drawerHeader: {
    ...theme.mixins.toolbar,
  },
});

class HabitList extends Component {

  componentDidMount() {
    this.props.getHabits();
  }

  render() {
    const { classes, habits, transition } = this.props;
    return (
      // <Grow in={transition}>
      <main>
        <div className={classes.drawerHeader} />
        {habits.map(habit => 
          <Habit
            habit={habit}
            key={habit._id}
          />
        )}
      </main>
      // </Grow>
    )
  }
}

export default withStyles(styles)(HabitList);