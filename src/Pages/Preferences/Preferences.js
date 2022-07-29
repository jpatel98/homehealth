import { v4 as uuid } from 'uuid';
import menu from '../../data/menu.json';

const Preferences = ({ handlePreferencesSubmit, history }) => {

	return (
		<div>
			<p className="service__prompt">PREFERENCE SELECT</p>
			<form onSubmit={(e) => {
				handlePreferencesSubmit(e)
				history.push('/preferences');
			}}>
				<select name="services" id="services" className="service__form">
				</select>
				<button className="service__button" type="submit">NEXT</button> 
			</form>
		</div>	
	);
}

export default Preferences;
