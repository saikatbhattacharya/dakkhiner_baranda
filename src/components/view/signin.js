import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

/**
 * Dialog content can be scrollable.
 */
export default class signinForm extends React.Component {

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <RaisedButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.handleClose}
      />,
    ];


    return (
      <div>
        <Dialog
          title="Sign In"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
          autoScrollBodyContent={true}
        >
    <TextField
      floatingLabelText="Username or Email"
      fullWidth={true}
    /><br/>
    <TextField
      hintText="Password"
      floatingLabelText="Password"
      type="password"
      fullWidth={true}
    /><br/>
        </Dialog>
      </div>
    );
  }
}