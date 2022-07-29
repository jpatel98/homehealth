import './App.scss';
import './partials/_global.scss';
import MainPage from './Pages/MainPage/MainPage';
import ServiceSelect from './Pages/ServiceSelect/ServiceSelect';
import Preferences from './Pages/Preferences/Preferences';
import ProviderList from './Pages/ProviderList/ProviderList';
// import BottomBar from './Components/BottomBar/BottomBar';
import TopNav from './assets/icons/topBar.svg';
import BottomNav from './assets/icons/bottomNav.svg';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component{
	state = {
		name: "Hyunh",
		service: "",
		urgency: "",
		gender: ""
	}

	handleServiceSubmit = (e) => {
		e.preventDefault();
		this.setState({ service: e.target.services.value });
	}

	handlePreferencesSubmit = (e) => {
		e.preventDefault();
		const { urgency, gender } = e.target;
		this.setState({ 
			urgency: urgency.value,
			gender: gender.value
		});
	}

	handleProviderSelect = (e) => {
		e.preventDefault();
		console.log("In Provider Select");
	}

	render(){
	    return (
			<Router>
				<img className="navbar__top" src={TopNav} alt="Top Navigation Bar"></img>
				<Switch>
			  		<Route path='/temphold' exact component={(routerProps) => {
						return (
							<MainPage
								name={this.state.name}
								{...routerProps}
							/>
						)
					}}/>
			  		<Route path='/' exact component={(routerProps) => {
						return (
							<ServiceSelect
								handleServiceSubmit={(e) => {
									this.handleServiceSubmit(e);
								}}
								{...routerProps}
							/>
						)
					}}/>
			  		<Route path='/preferences' component={(routerProps) => {
						return (
							<Preferences
								handlePreferencesSubmit={(e) => {
									this.handlePreferencesSubmit(e);
								}}
								{...routerProps}
							/>
						);
					}}/>
			  		<Route path='/providers' component={(routerProps) => {
						return (
							<ProviderList
								handleProviderSelect={(e) => {
									this.handleProviderSelect(e);
								}}
								{...routerProps}
							/>
						);
					}}/>

				</Switch>
				<img className="navbar__bottom" src={BottomNav}  alt="Bottom Navigation Bar"></img>
			</Router>
		);
	}
}

export default App;
