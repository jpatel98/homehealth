import { v4 as uuid } from 'uuid';
import menu from '../../data/menu.json';

const Preferences = ({ handlePreferencesSubmit, history }) => {

	return (
		<div className="preferences">
			<h2 className="preferences__header">Your Preferences</h2>
			<p className="preferences__prompt">PREFERENCE SELECT</p>
			<form onSubmit={(e) => {
				handlePreferencesSubmit(e)
				history.push('/preferences');
			}}>
				<select name="services" id="services" className="preferences__form">
				</select>
				<button className="service__button" type="submit">SEARCH</button> 
			</form>
		</div>	
	);
}

export default Preferences;
