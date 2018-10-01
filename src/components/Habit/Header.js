import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  grow: {
    flexGrow: 1
  },
  good: {
    color: 'orange',
    borderColor: 'orange',
  },
  bad: {
    color: 'purple',
    borderColor: 'purple',
  }
};

const Header = props => {
  const { classes, title, isGood } = props;
  const kind = isGood ? classes.good : classes.bad;
  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography
          variant="title"
          className={`${classes.grow} ${kind}`}
        >
          {title}
        </Typography>
        <Button
          color={isGood ? 'primary' : 'secondary'}
          variant="contained"
          children='Did it'
        />
      </Toolbar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);