import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import Navbar from '../view/navbar';
import SideBar from '../view/sideBar';
import HomeCard from '../view/homeCard';
import Footer from '../view/footer';
import ContentPage from '../view/contentPage';
import SignupForm from '../view/signup';
import SigninForm from '../view/signin';
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
	state = {
		sideBarOpen: false,
		isContentShow: false,
		openSignUpForm:false,
		openSignInForm:false
	}

	componentWillMount(event) {
		injectTapEventPlugin();
	}

	openSideBar = (event) => {
		this.setState({ sideBarOpen: !this.state.sideBarOpen });
	}

	setSideBarState = (sideBarOpen) => {
		this.setState({ sideBarOpen });
	}

	closeSideBar = () => this.setState({ sideBarOpen: false });

	handleModalOpen = () => {
		this.setState({ isContentShow: true ,sideBarOpen: false });
	};

	handleModalClose = () => {
		this.setState({ isContentShow: false ,sideBarOpen: false });
	};

	openSignUpForm = () => {
		this.setState({openSignUpForm:true});
	}

	closeSignUpForm = () =>{
		this.setState({openSignUpForm:false});
	}

	openSignInForm = () => {
		this.setState({openSignInForm:true});
	}

	closeSignInForm = () =>{
		this.setState({openSignInForm:false});
	}

	render = () => {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Navbar
						openSideBar={this.openSideBar}
						openSignUpForm={this.openSignUpForm}
						openSignInForm={this.openSignInForm}/>
					<SideBar
						sideBarOpen={this.state.sideBarOpen}
						closeSideBar={this.closeSideBar}
						setSideBarState={this.setSideBarState}
						handleModalOpen={this.handleModalOpen}
						handleModalClose={this.handleModalClose}/>
					{
						!this.state.isContentShow
						?
						<HomeCard/>
						:
						<ContentPage/>
				}
				<SignupForm
				handleClose={this.closeSignUpForm}
				open={this.state.openSignUpForm}/>

				<SigninForm
				handleClose={this.closeSignInForm}
				open={this.state.openSignInForm}
				/>
				
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
