import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 10
  },
  title: {
    marginBottom: theme.spacing.unit * 4
  },
  loginButton: {
    marginTop: theme.spacing.unit * 4
  },
  newAccountButton: {
    marginTop: theme.spacing.unit * 10
  }

});

class Signup extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.root} >
        <Typography
          variant="display3"
          className={classes.title}
        >
          Habits
        </Typography>
        <TextField
          // id="new-habit-title"
          label="Email"
          // value={this.state.name}
          // onChange={this.onTextChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          // id="new-habit-title"
          label="Password"
          // value={this.state.name}
          // onChange={this.onTextChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          // id="new-habit-title"
          label="Confirm Password"
          // value={this.state.name}
          // onChange={this.onTextChange}
          margin="normal"
          variant="outlined"
        />
        <Button
          color="primary"
          children='Sign Up'
          variant='contained'
          className={classes.loginButton}
        />
        <Button
          color="primary"
          children='Login instead'
          variant='text'
          component={Link}
          to='/login'
          className={classes.newAccountButton}
        />
      </main>
    )
  }
}

export default withStyles(styles)(Signup);