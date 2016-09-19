import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import style from '../../css/style.css';
import {teal900,red500} from 'material-ui/styles/colors';

const inlineStyle={
    backgroundColor:teal900,
}
class navbar extends React.Component {
    render = () => {
        return (
            <AppBar
            style={inlineStyle}
                title={<img className='topLogo' src="https://raw.githubusercontent.com/saikatcts/dakkhiner_baranda/master/src/assets/images/logo_white.png"/>}
                onLeftIconButtonTouchTap={this.props.openSideBar}
                iconElementRight={
                    <IconMenu
                        iconButtonElement={
                            <IconButton><MoreVertIcon /></IconButton>
                        }
                        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                        >
                        <MenuItem primaryText="Contact" />
                        <MenuItem primaryText="New User" />
                        <MenuItem primaryText="Sign In" />
                        
                    </IconMenu>
                }
                />
        )
    }
}


export default navbar;
