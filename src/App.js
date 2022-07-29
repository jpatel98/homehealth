import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import MainPage from './Pages/MainPage/MainPage'

class App extends Component{
	state = {
		userSelect: {
			service: "",
			urgency: "",
			gender: ""
		},
	}
	render(){
	    return (
	  		<Router>
				<Switch>
			  		<Route path='/' exact component={(routerProps) => {
						return (
							<MainPage
								name={this.state.name}
								{...routerProps}
							/>
						)
					}}/>
				</Switch>
			</Router>
		);
	}
}

export default App;
