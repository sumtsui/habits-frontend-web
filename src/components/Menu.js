import React from "react";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const styles = theme => ({
  drawerPaper: {
    // position: 'absolute',
    width: theme.drawer.width,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...theme.mixins.toolbar,
  },
  menuTitle: {
    marginLeft: '.7em'
  },
  menuText: {
    textDecoration: 'none',
    '&:visited': {
      color: theme.palette.text.secondary,
    },
    color: theme.palette.text.secondary,
  }
});

const Menu = props => {
  const {classes, open, theme, handleDrawerClose} = props;

  const MenuItems = (
      <List>
        
        <ListItem button>
          <ListItemText primary={<Link to="/new-habit" className={classes.menuText}>Logout</Link>} />
        </ListItem>

        <ListItem button>
          <ListItemText primary={<Link to="/new-habit" className={classes.menuText}>New Habit</Link>} />
        </ListItem>

        <ListItem button>
          <ListItemText primary={<Link to="/new-habit" className={classes.menuText}>Manage Habits</Link>} />
        </ListItem>

      </List>
  );

  return (
    <SwipeableDrawer
      anchor='left'
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
      onOpen={() => {}}
      onClose={() => {}}
    >
      <div className={classes.drawerHeader}>
        <Typography variant="title" color="textSecondary" className={classes.menuTitle}>
          Menu
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      {MenuItems}
    </SwipeableDrawer>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles, {withTheme: true})(Menu);