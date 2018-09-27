import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 20,
  },
  appBar: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
});

const ButtonAppBar = props => {
  const { classes, handleDrawerOpen, location, history } = props;



  return (
    <AppBar className={classNames(classes.appBar)} >
      <Toolbar>
        {
          (location.pathname === '/') ?
            <IconButton 
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classes.menuButton}
              children={<MenuIcon />}
            />
            :
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={history.goBack}
              className={classes.menuButton}
              children={<ChevronLeftIcon />}
            />
        }
        <Typography variant="title" color="inherit" className={classes.grow}>
          Habits
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);