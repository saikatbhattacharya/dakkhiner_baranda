import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {ActionSupervisorAccount,ContentSend,ContentDrafts,ActionGrade} from 'material-ui/svg-icons';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

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
          <List>
            <Subheader><img className='topLogo' src="https://raw.githubusercontent.com/saikatcts/dakkhiner_baranda/master/src/assets/images/logo_black.png"/></Subheader>
            <MenuItem onTouchTap={this.props.handleModalClose} leftIcon={<ActionSupervisorAccount/>}>Home</MenuItem>
          <MenuItem onTouchTap={this.props.closeSideBar}>সম্পাদকীয়</MenuItem>
          <MenuItem onTouchTap={this.props.closeSideBar}>আমাদের কথা</MenuItem>
          <MenuItem>সূচীপত্র</MenuItem>
          <MenuItem onTouchTap={this.props.handleModalOpen}>গল্প</MenuItem>
            <ListItem
              primaryText="Inbox"
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Starred"
                  leftIcon={<ActionGrade />}
                />,
                <ListItem
                  key={2}
                  primaryText="Sent Mail"
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
                <ListItem
                  key={3}
                  primaryText="Inbox"
                  open={false}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
              ]}
            />
          </List>
        </Drawer>
      </div>
    );
  }
}