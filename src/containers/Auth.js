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
            match={match}
          />
        } />

        <Route path={`${match.url}/signup`} render={({ match }) =>
          <Signup
            transition={transition}
            match={match}
          />
        } />
      </div>
    )
  }
}

export default Auth;
