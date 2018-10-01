import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { logoutUser, onLogoutPromptClose } from '../actions/';

class Logout extends Component {
  render() {
    const { open, logoutUser, onLogoutPromptClose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={() => {}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Log out from Habits?"}</DialogTitle>
        <DialogActions>
          <Button onClick={() => { logoutUser(); onLogoutPromptClose(); }} color="primary">
            Yes
          </Button>
          <Button onClick={() => { onLogoutPromptClose() }} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const mapStateToProps = state => {
  const { nav } = state;
  return {
    open: nav.logoutPromptOpen
  }
}

export default connect(mapStateToProps, { logoutUser, onLogoutPromptClose })(Logout);