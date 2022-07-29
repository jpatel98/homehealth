import { v4 as uuid } from 'uuid';
import menu from '../../data/menu.json';
import BackArrow from '../../assets/icons/backarrow.png';

const Preferences = ({ handlePreferencesSubmit, history }) => {
	return (
		<div className='preferences'>
			<img className="preferences__back" onClick={() => {history.push('/');}} src={BackArrow} alt="back button" />	
			<h1 className="preferences__title">Your Preferences</h1>
			<form onSubmit={(e) => {
				handlePreferencesSubmit(e)
				history.push('/preferences');
			}}>
				<label htmlFor="urgency">How urgent is this visit?
					<select name="urgency" id="urgency" className="preferences__urgency-select">
						<option key={uuid()} value="error">Select Urgency</option>
						{menu.urgency.map(type => 
							<option key={uuid()} value={type}>{type}</option>
						)}
					</select>
				</label>
				<label htmlFor="gender">Do you have a gender preference for your doctor?
					<select name="gender" id="gender" className="preferences__gender-select">
						{menu.gender.map(type => 
							<option key={uuid()} value={type}>{type}</option>
						)}
					</select>
				</label>
				<button className="preferences__button" type="submit">SEARCH</button> 
			</form>
		</div>	
	);
}

export default Preferences;
