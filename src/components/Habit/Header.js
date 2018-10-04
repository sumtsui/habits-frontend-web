import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
import { recordHabit, undoRecordHabit } from '../../actions';

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
  const { classes, title, isGood, _id, recordHabit, undoRecordHabit, recorded } = props;
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
        <FormControlLabel
          control={
            <Switch
              checked={recorded}
              onChange={(e) => (e.target.checked) ? recordHabit(_id) : undoRecordHabit(_id)}
              color={isGood ? 'primary' : 'secondary'}
            />
          }
          label="Did It"
        />
      </Toolbar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const {habit} = state;
  return {
    ...state
  }
}

export default connect(mapStateToProps, { recordHabit, undoRecordHabit })(withStyles(styles)(Header));