import { v4 as uuid } from 'uuid';
import menu from '../../data/menu.json';
import './ServiceSelect.scss';
import BackArrow from '../../assets/icons/backarrow.png'
import {Link } from 'react-router-dom';

const ServiceSelect = ({ handleServiceSubmit, history }) => {

	return (
		<div className='service'>
			<Link className='service__goback'>
				<img src={BackArrow} alt="back" />
			</Link>
			<h1 className="service__title">Book a Doctor's Visit</h1>
			<p className="service__prompt">What type of service are you looking for?</p>
			<form className='service__form' onSubmit={(e) => {
				handleServiceSubmit(e)
				history.push('/preferences');
				
			}}>
				<select name="services" id="services" className="service__form-select">
					<option key={uuid()} value="error" className='service__form-select'>Select Service</option>
					{menu.services.map(service => 
						<option key={uuid()} value={service}>{service}</option>
					)}
				</select>
				<button className="service__form-btn" type="submit">NEXT</button> 
			</form>
		</div>	
	);
}

export default ServiceSelect;
