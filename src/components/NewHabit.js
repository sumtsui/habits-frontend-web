import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbUpOutlined from '@material-ui/icons/ThumbUpOutlined';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbDownOutlined from '@material-ui/icons/ThumbDownOutlined';
import Grow from "@material-ui/core/Grow";
import classNames from 'classnames';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';

import { addNewHabit } from '../actions';

const styles = theme => ({
  drawerHeader: {
    ...theme.mixins.toolbar,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 6
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  formItem: {
    marginBottom: theme.spacing.unit * 3
  },
  label: {
    marginRight: theme.spacing.unit * 6
  },
  button: {
    marginTop: theme.spacing.unit * 6
  }
});

class NewHabit extends Component {

  state = {
    title: '',
    kind: '',
  };

  onTextChange = event => {
    this.setState({title: event.target.value});
  };

  onCheck = event => {
    if (event.target.checked) {
      this.setState({kind: event.target.value});
    } else {
      this.setState({kind: ''});
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      isGood: this.state.kind === 'good' ? 1 : 0
    }
    this.props.addNewHabit(data, this.props.history);
  }

  render() {

    const { classes, transition } = this.props;
    return (
      // <Grow in={transition}>
      <main>
        <div className={classes.drawerHeader} />
        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.onSubmit}>
          <FormGroup row className={classes.formItem}>
            <TextField
              id="new-habit-title"
              label="Enter Title"
              className={classes.textField}
              value={this.state.name}
              onChange={this.onTextChange}
              margin="normal"
              variant="outlined"
            />
          </FormGroup>
          <FormGroup row className={classes.formItem}>
            <FormControlLabel
              className={classes.label}
              control={
                <Checkbox
                  checked={this.state.kind === 'good'}
                  onChange={this.onCheck}
                  value="good"
                  color="primary"
                  icon={<ThumbUpOutlined />}
                  checkedIcon={<ThumbUp />}
                />
              }
              label="Good Habit"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.kind === 'bad'}
                  onChange={this.onCheck}
                  value="bad"
                  color="secondary"
                  icon={<ThumbDownOutlined />}
                  checkedIcon={<ThumbDown />}
                />
              }
              label="Bad Habit"
            />
          </FormGroup>
          <FormGroup row className={classNames(classes.formItem)}>
            <Button
              color="primary"
              children='Save'
              variant='contained'
              className={classes.button}
              type="submit"
            />
          </FormGroup>
        </form>
      </main>
      // </Grow>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { addNewHabit })(withStyles(styles)(NewHabit));