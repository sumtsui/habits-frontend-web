import React, { Component } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { Route } from 'react-router-dom';

class Auth extends Component {
  render() {

    const { transition, match } = this.props;

    return (
      <div>
        <Route path={`${match.url}/login`} render={() =>
          <Login
            transition={transition}
          />
        } />

        <Route path={`${match.url}/signup`} render={() =>
          <Signup
            transition={transition}
          />
        } />
      </div>
    )
  }
}

export default Auth;
