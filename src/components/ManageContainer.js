import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { arrayMove } from 'react-sortable-hoc';
import Grow from "@material-ui/core/Grow";
import ManageList from './ManageList';
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import ConfirmPrompt from './ConfirmPrompt';
import { connect } from 'react-redux';
import { saveChange, deleteHabit, onPromptOpen } from '../actions';

const styles = theme => ({
  drawerHeader: {
    ...theme.mixins.toolbar,
  },
  container: {
    marginTop: theme.spacing.unit * 3
  },
  button: {
    margin: 'auto',
    marginTop: theme.spacing.unit * 6,
  }
});

class ManageContainer extends Component {

  state = {
    items: this.props.habits,
    toBeDeleted: {}
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  onSave = () => {
    this.props.saveChange(this.state.items, this.props.history);
  }

  getDeleteItem = (item) => {
    this.setState({toBeDeleted: item});
  }

  render() {
    const { classes, transition, deleteHabit, onPromptOpen } = this.props;
    const { items, toBeDeleted } = this.state;
    return (
      // <Grow in={transition}>
      <main className={classes.root}>
        <div className={classes.drawerHeader} />
        <form className={classes.container} >
          <ManageList items={items} onSortEnd={this.onSortEnd} getDeleteItem={this.getDeleteItem} onPromptOpen={onPromptOpen} />
          <FormGroup row>
            <Button
              color="primary"
              children='Save'
              variant='contained'
              className={classes.button}
              onClick={this.onSave}
            />
          </FormGroup>
        </form>
        <ConfirmPrompt
          message={'Delete "' + toBeDeleted.title + '"?'} 
          action={() => deleteHabit(toBeDeleted._id)} 
        />
      </main>
      // </Grow>
    )
  }
}

const mapStateToProps = state => {
  const { habit } = state;
  return {
    habits: habit.habits
  }
}

export default connect(mapStateToProps, { saveChange, deleteHabit, onPromptOpen })(withStyles(styles)(ManageContainer));