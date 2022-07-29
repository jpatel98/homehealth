import React, { Component } from 'react';
import SearchForm from '../../Components/SearchForm/SearchForm';


class MainPage extends Component {
	

    render() {
		const { name } = this.props;

        return (
            <div className='home'>
                <h1 className='home__heading'>{`Hello ${name}, how can we help you today?`}</h1>
                <SearchForm />
            </div>
        );
    }
}


export default MainPage;
