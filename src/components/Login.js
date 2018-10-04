import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { Link, Redirect } from 'react-router-dom';
// Actions
import { onTextChanged, loginUser } from '../actions/';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 10,
  },
  title: {
    marginBottom: theme.spacing.unit * 4,
  },
  loginButton: {
    marginTop: theme.spacing.unit * 4
  },
  newAccountButton: {
    marginTop: theme.spacing.unit * 10
  }

});

class Login extends Component {

  render() {
    const { classes, onTextChanged, email, password, loginUser, isLogin, match } = this.props;

    if (isLogin) {
      return <Redirect to='/' />;
    }

    return (
      <form className={classes.root} >
        <Typography
          variant="display3"
          className={classes.title}
        >
          Habits
        </Typography>
        <TextField
          name='email'
          label="Email"
          value={email}
          onChange={onTextChanged}
          margin="normal"
          variant="outlined"
          type='email'
          autoFocus
        />
        <TextField
          name='password'
          label="Password"
          value={password}
          onChange={onTextChanged}
          margin="normal"
          variant="outlined"
          type='password'
        />
        <Button
          color="primary"
          children='Login'
          variant='contained'
          className={classes.loginButton}
          onClick={() => loginUser({email, password})}
          // type='submit'
        />
        <Button
          color="primary"
          children='Create new account'
          variant='text'
          component={Link}
          to={`${match.url}/signup`}
          className={classes.newAccountButton}
        />
      </form>
    )
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  return {
    email: auth.email,
    password: auth.password,
    error: auth.error,
    loading: auth.loading,
    isLogin: auth.isLogin
  }
}

export default connect(mapStateToProps, { onTextChanged, loginUser })(withStyles(styles)(Login));