import React, { Component } from 'react';
import Appbar from './components/Appbar';
import Menu from './components/Menu';
import Home from './components/Home';
import NewHabit from './components/NewHabit';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './CustomTheme';
import { BrowserRouter, Route } from 'react-router-dom';

const habits = [
  {
    title: 'Run',
    lastWeek: 2,
    thisMonth: 5,
    lastMonth: 8,
    isGood: true,
    thisWeek: [0, 2],
    id: 'ed8s03'
  },
  {
    title: 'Being lazy',
    lastWeek: 3,
    thisMonth: 3,
    lastMonth: 11,
    isGood: false,
    thisWeek: [4],
    id: 'ed8s05'
  },
]

class App extends Component {

  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  handleDrawerClose = () => {
    this.setState({open: false});
  };

  render() {
    const { open } = this.state;
    return (
      <MuiThemeProvider theme={theme} >
        <BrowserRouter>
        <div>
          <Route render={props => <Appbar
            handleDrawerOpen={this.handleDrawerOpen}
            {...props}
          />} />
          <Route render={() => <Menu
            handleDrawerClose={this.handleDrawerClose} open={open} 
          /> } />
          <Route exact path="/" render={() => <Home
            habits={habits}
            open={open}
          /> } />
          <Route exact path="/new-habit" render={() => <NewHabit/> } />
        </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
