import { v4 as uuid } from 'uuid';
import menu from '../../data/menu.json';
import './Prefernces.scss';
import BackArrow from '../../assets/icons/backarrow.png'
import {Link } from 'react-router-dom';

const Preferences = ({ handlePreferencesSubmit, history }) => {
	return (
		<div className="preferences">
			<Link className='service__goback'>
				<img src={BackArrow} alt="back" />
			</Link>
			<h1 className="preferences__title">Your Preferences</h1>
			<form  className="preferences__form" onSubmit={(e) => {
				handlePreferencesSubmit(e)
				history.push('/preferences');
			}}>
				<label htmlFor="urgency" className="preferences__form__prompt">How urgent is this visit?
					<select name="urgency" id="urgency" className="preferences__form__prompt-select">
						<option key={uuid()} value="error" className="preferences__form__prompt-select-urgency">Select Urgency</option>
						{menu.urgency.map(type => 
							<option key={uuid()} value={type}>{type}</option>
						)}
					</select>
				</label>
				<label htmlFor="gender" className="preferences__form__prompt">Do you have a gender preference for your doctor?
					<select name="gender" id="gender" className="preferences__form__prompt-select">
						{menu.gender.map(type => 
							<option key={uuid()} value={type} className="preferences__form__prompt-select-gender">{type}</option>
						)}
					</select>
				</label>
				<button className="preferences__form__button" type="submit">SEARCH</button> 
			</form>
		</div>	
	);
}

export default Preferences;
