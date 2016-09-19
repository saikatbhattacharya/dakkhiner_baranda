import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import AppBar from 'material-ui/AppBar';


class navbar extends React.Component {
    titleStyle={

    }

    render = () => {
        return (
            <AppBar
                title={<img src="assets/images/logo_black.png"/>}
                onLeftIconButtonTouchTap={this.props.openSideBar}
                />
        )
    }
}


export default navbar;
