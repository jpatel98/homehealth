import { v4 as uuid } from 'uuid';
import menu from '../../data/menu.json';

const ServiceSelect = ({ handleServiceSubmit }) => {

	return (
		<div>
			<h1 className="service__title">Book a Doctor's Visit</h1>
			<p className="service__prompt">What type of service are you looking for?</p>
			<form onSubmit={(e) => {handleServiceSubmit(e)}}>
				<select name="services" id="services" className="service__form">
					<option key={uuid()} value="error">Select Service</option>
					{menu.services.map(service => 
						<option key={uuid()} value={service}>{service}</option>
					)}
				</select>
				<button className="service__button" type="submit">NEXT</button> 
			</form>
		</div>	
	);
}

export default ServiceSelect;
