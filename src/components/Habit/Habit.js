import React, { Component } from 'react';
import Data from './Data';
import Header from './Header';
import Week from './Week';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const styles = {
  root: {
    margin: '1em .5em'
  },
};

// const today = (new Date().getDate() === 0) ? 7 : new Date().getDay();

class Habit extends Component {

  state = {
    // todayLogged: this.props.habit.thisWeek.includes(today) ? true : false
  }

  // componentDidMount() {
  //   console.log('Habit mounted!');
  // }

  // componentDidUpdate(prevProps) {
  //   console.log('Habit updated!', this.props.habit.title);
  //   console.log('habit curProp thisweek', this.props.habit.thisWeek)
  //   console.log('habit prevProp thisweek', prevProps.habit.thisWeek)
  //   if (this.props.habit.thisWeek !== prevProps.habit.thisWeek) {
  //     console.log(today);
  //     this.setState({ todayLogged: this.props.habit.thisWeek.includes(today) ? true : false })
  //   }
  // }

  render() {
    const { habit, classes } = this.props;
    // const { todayLogged } = this.state;
    const today = (new Date().getDate() === 0) ? 7 : new Date().getDay();
    const todayLogged = this.props.habit.thisWeek.includes(today) ? true : false
    return (
      <div className={classes.root}>
        <Header
          title={habit.title}
          _id={habit._id}
          isGood={habit.isGood}
          todayLogged={todayLogged}
        />
        <Week
          isGood={habit.isGood}
          thisWeek={habit.thisWeek}
          todayLogged={todayLogged}
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
}

export default withStyles(styles)(Habit);