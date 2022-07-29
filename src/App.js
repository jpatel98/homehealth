import './App.scss';
import './partials/_global.scss';
import MainPage from './Pages/MainPage/MainPage';
import ServiceSelect from './Pages/ServiceSelect/ServiceSelect';
import Preferences from './Pages/Preferences/Preferences';
import ProviderList from './Pages/ProviderList/ProviderList';
import Booking from './Pages/Booking/Booking';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component{
	state = {
		name: "Presenter's Name",
		service: "",
		urgency: "",
		gender: "",
		provider: ""
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

	handleProviderSelect = (name) => {
		this.setState({
			provider: name
		});
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
			  		<Route path='/details/:name' component={(routerProps) => {
						return (
							<Booking
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
