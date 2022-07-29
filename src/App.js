import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import MainPage from './Pages/MainPage/MainPage';
import ServiceSelect from './Pages/ServiceSelect/ServiceSelect';
import Preferences from './Pages/Preferences/Preferences';

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
		console.log(e.target);
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
									this.handleServiceSubmit(e);
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
