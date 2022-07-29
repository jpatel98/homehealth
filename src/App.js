import './App.scss';
import './partials/_global.scss';
import MainPage from './Pages/MainPage/MainPage';
import ServiceSelect from './Pages/ServiceSelect/ServiceSelect';
import Preferences from './Pages/Preferences/Preferences';
import ProviderList from './Pages/ProviderList/ProviderList';
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
			</Router>
		);
	}
}

export default App;
