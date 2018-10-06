import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
import { recordHabit, undoRecordHabit } from '../../actions';

const styles = theme => ({
  grow: {
    flexGrow: 1,
    paddingLeft: theme.spacing.unit
  },
  good: {
    color: 'orange',
    borderColor: 'orange',
  },
  bad: {
    color: 'purple',
    borderColor: 'purple',
  }
});

const Header = props => {
  const { classes, title, isGood, _id, recordHabit, undoRecordHabit, todayLogged } = props;
  const kind = isGood ? classes.good : classes.bad;
  return (
    <div>
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
              checked={todayLogged}
              onChange={(e) => {
                (e.target.checked) ? recordHabit(_id, e.target.checked) : undoRecordHabit(_id, e.target.checked);
              }}
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

export default connect(null, { recordHabit, undoRecordHabit })(withStyles(styles)(Header));