import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { arrayMove } from 'react-sortable-hoc';
import ManageList from '../components/ManageList';
import ConfirmPrompt from '../components/ConfirmPrompt';
import { connect } from 'react-redux';
import { saveChange, deleteHabit, onPromptOpen, getHabits } from '../actions';
import Empty from '../components/Empty';

const styles = theme => ({

});

class Manage extends Component {

  state = {
    items: this.props.habits,
    toBeDeleted: {},
    rearranged: false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deletedHabitID !== this.props.deletedHabitID) {
      this.props.getHabits();
    }
    if (prevProps.habits !== this.props.habits) {
      this.setState({items: this.props.habits});
    }
  }

  componentWillUnmount() {
    const { saveChange, history } = this.props;
    const { items, rearranged } = this.state;
    if (rearranged) saveChange(items, history);
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({ 
      items: arrayMove(this.state.items, oldIndex, newIndex),
      rearranged: true 
    });
  };

  getDeleteItem = (item) => {
    this.setState({toBeDeleted: item});
  }

  render() {
    const { classes, deleteHabit, onPromptOpen, loading } = this.props;
    const { items, toBeDeleted } = this.state;
    
    if (items.length < 1) return <Empty />

    return (
      <div>
        <ManageList 
          items={items}
          onSortEnd={this.onSortEnd}
          getDeleteItem={this.getDeleteItem}
          onPromptOpen={onPromptOpen} 
        />
        <ConfirmPrompt
          message={'Delete "' + toBeDeleted.title + '"?'} 
          action={() => {
            deleteHabit(toBeDeleted._id);
          }} 
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.habit.loading,
    deletedHabitID: state.habit.deletedHabitID,
  }
}

export default connect(mapStateToProps, { saveChange, deleteHabit, onPromptOpen, getHabits })(withStyles(styles)(Manage));