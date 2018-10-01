import React, { Component } from 'react';
import Auth from './Auth';
import Main from './Main';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/')
      .then((response) =>
        response.json()
      )
      .then(json => {
        console.log(JSON.stringify(json));
      });
  }

  render() {

    const { isLogin } = this.props;

    return (
      <MuiThemeProvider theme={theme} >
        <BrowserRouter>
          <Switch>

            <Route path="/auth" render={props =>
              <Auth {...props} />
            } />
    
            <Route path="/" render={props =>
              <div>
                {isLogin || <Redirect to='/auth/login' />}
                <Main {...props} />
              </div>
            } />

          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  return {
    isLogin: auth.isLogin
  }
}

export default connect(mapStateToProps)(App);
