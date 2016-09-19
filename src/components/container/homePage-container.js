import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import Navbar from '../view/navbar';
import SideBar from '../view/sideBar';
import HomeCard from '../view/homeCard';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green100, green500, green700} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  }
});

class home extends React.Component {
	state={
		sideBarOpen:false
	}
	componentWillMount(event){
		injectTapEventPlugin();
	}

	openSideBar = (event)=>{
		this.setState({sideBarOpen: !this.state.sideBarOpen});
	}

	setSideBarState = (sideBarOpen)=>{
		this.setState({sideBarOpen});
	}

  	closeSideBar = () => this.setState({sideBarOpen: false});

	render = () => {
		console.log(" Information printing: ", JSON.stringify(this.props.formObj));
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
			<div>
				<Navbar
				openSideBar={this.openSideBar}/>
				<SideBar
				sideBarOpen={this.state.sideBarOpen}
				closeSideBar={this.closeSideBar}
				setSideBarState={this.setSideBarState}/>
				<HomeCard/>
			</div>
			</MuiThemeProvider>
			
		)
	}
}

let mapStateToProps = (store) => {
	return {
		
	};
};


export default connect(mapStateToProps)(home);
