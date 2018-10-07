import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Habit from './Habit/Habit';
import { connect } from 'react-redux';
import Empty from './Empty';


const styles = theme => ({
});

class HabitList extends Component {

  componentDidMount() {
    console.log('componentDidMount fetch habits!')
    this.props.getHabits();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isToggled !== prevProps.isToggled || this.props.id !== prevProps.id) {
      console.log('componentDidUpdate fetch habits!')
      this.props.getHabits();
    }
  }

  render() {
    const { habits, loading } = this.props;
    if (habits.length < 1 && loading === false ) return <Empty />
    return (
      <div>
        {habits.map(habit => <Habit habit={habit} key={habit._id} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isToggled: state.habit.todayRecordChanged,
    id: state.habit.changedHabitID,
    loading: state.habit.loading
  }
}

export default connect(mapStateToProps, {})(withStyles(styles)(HabitList));