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
import Button from "@material-ui/core/Button";
import classNames from 'classnames';

const styles = theme => ({
  root: {
    width: '100%'
  },
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
  formButtons: {
    marginTop: theme.spacing.unit * 6
  },
});

class NewHabit extends Component {

  state = {
    title: '',
    kind: ''
  };

  handleChange = event => {
    this.setState({title: event.target.value});
  };

  handleCheck = event => {
    if (event.target.checked) {
      this.setState({kind: event.target.value});
    } else {
      this.setState({kind: ''});
    }
    
  };

  render() {
    const {classes} = this.props;
    return (
      <main className={classes.root}>
        <div className={classes.drawerHeader} />
        <form className={classes.container} noValidate autoComplete="off">
          <FormGroup row className={classes.formItem} >
            <TextField
              id="new-habit-title"
              label="Enter Title"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange}
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
                  onChange={this.handleCheck}
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
                  onChange={this.handleCheck}
                  value="bad"
                  color="secondary"
                  icon={<ThumbDownOutlined />}
                  checkedIcon={<ThumbDown />}
                />
              }
              label="Bad Habit"
            />
          </FormGroup>
          <FormGroup row className={classNames(classes.formItem, classes.formButtons)}>
            <Button
              color="primary"
              variant="outlined"
              children='Save'
              variant='contained'
            />
          </FormGroup>
        </form>
      </main>
    )
  }
}

export default withStyles(styles)(NewHabit);