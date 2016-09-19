import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import SupervisorAcc from 'material-ui/svg-icons/action/supervisor_account';

export default class sideBar extends React.Component {
 render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.sideBarOpen}
          onRequestChange={(open) => this.props.setSideBarState(open)}
        >
          <MenuItem onTouchTap={this.props.closeSideBar} rightIcon={<SupervisorAcc/>}>সম্পাদকমণ্ডলী</MenuItem>
          <MenuItem onTouchTap={this.props.closeSideBar}>সম্পাদকীয়</MenuItem>
          <MenuItem onTouchTap={this.props.closeSideBar}>আমাদের কথা</MenuItem>
          <MenuItem>সূচীপত্র</MenuItem>
          <MenuItem onTouchTap={this.props.closeSideBar}>গল্প</MenuItem>
        </Drawer>
      </div>
    );
  }
}