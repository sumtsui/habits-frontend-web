import React, { Component } from 'react';
import HabitList from '../components/HabitList';
import NewHabit from '../components/NewHabit';
import ManageHabits from '../components/ManageHabits';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getThisWeekData } from '../utils';

import { getHabits } from '../actions';

const habits = [
  {
    title: 'Run',
    lastWeek: 2,
    thisMonth: 5,
    lastMonth: 8,
    thisWeek: [ 0, 2 ],
    isGood: true,
    id: 'ed8s03'
  },
  {
    title: 'Smoking',
    lastWeek: 3,
    thisMonth: 3,
    lastMonth: 11,
    isGood: false,
    thisWeek: [ 4 ],
    id: 'ed8s05'
  }
]

class Main extends Component {

  state = {
    transition: false,
  }

  componentDidMount() {
    this.props.getHabits();
  }

  // animation
  onBack = () => this.setState({ transition: false });
  onIn = () => this.setState({ transition: true });

  render() {
    const { history, location, habits, loading } = this.props;
    const { transition } = this.state;

    return (

      <div>

        <Navbar
          onBack={this.onBack}
          history={history}
          location={location}
          transition={transition}
        />

        <Route exact path={`/`} render={() =>
          <Menu
            onIn={this.onIn}
          />
        } />

        <Route exact path={`/`} render={() =>
          <HabitList habits={habits} transition={!transition} />
        } />

        <Route path={`/new-habit`} render={() =>
          <NewHabit
            transition={transition}
          />
        } />

        <Route path={`/manage-habits`} render={() =>
          <ManageHabits
            habits={habits}
            transition={transition}
          />
        } />

      </div>
    )
  }
}

const mapStateToProps = state => {
  const { habit } = state;
  return {
    habits: habit.habits,
    loading: habit.loading
  }
}

export default connect(mapStateToProps, { getHabits })(Main);