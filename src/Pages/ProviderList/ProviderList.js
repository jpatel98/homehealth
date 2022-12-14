import { v4 as uuid } from 'uuid';
import providers from '../../data/providers.json';
import BackArrow from '../../assets/icons/backarrow.png';
import star from '../../assets/icons/star.png';
import calendar from '../../assets/icons/calendar.png';
import elena from '../../assets/images/elena.png';
import raj from '../../assets/images/raj.png';
import fritz from '../../assets/images/fritz.png';
import bruce from '../../assets/images/bruce.png';

import './ProviderList.scss'

const ProviderList = ({ handleProviderSelect, history }) => {

	return (
		<div className='providers'>
			<img className="providers__back" onClick={() => {history.push('/preferences');}} src={BackArrow} alt="back button" />
			<div className='providers__title'>
				<h1 className="providers__title-text">{`Available Doctors ( ${providers.length} )`}</h1>
			</div>
			{providers.map(provider => {
				return(
					<div key={uuid()} className="providers__container"
						onClick={(e) => {
							e.preventDefault();
							handleProviderSelect(provider.name);
							console.log(provider.name);
							history.push(`/details/${provider.name}`);
						}}
					>
						{(provider.name === "Elena Horowitz") && <img className="providers__avatar" src={elena} alt={`${provider.name} avatar`}/>}
						{(provider.name === "Raj Bahl") && <img className="providers__avatar" src={raj} alt= {`${provider.name} avatar`}/>}
						{(provider.name === "Fritz Huber") && <img className="providers__avatar" src={fritz} alt={`${provider.name} avatar`}/>}
						{(provider.name === "Bruce Nunn") && <img className="providers__avatar" src={bruce} alt={`${provider.name} avatar`} />}
						
						<h2 className="providers__name">{provider.name}</h2>
						<p className="providers__type">{provider.type}</p>
						<div className="providers__rating-container">
							<img src={star} alt='star' />
							<p>{`Rating: ${provider.rating}`}</p>
							
						</div>
						<div className="providers__distance">{`${provider.distance} mi / ${provider.driveTime}min`}</div>
						<div className="providers__earliest">
							<img src={calendar} className="providers__earliest-img" alt=""/>
							<div className='provider__earliest-text'>
								<p>Earliest possible date</p>
								<p>{provider.nextAvailable}</p>
							</div> 
						</div>
					</div>
				);
			})}
		</div>	
	);
}

export default ProviderList;
