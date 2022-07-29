import { v4 as uuid } from 'uuid';
import elena from '../../assets/images/elena.png';
import providers from '../../data/providers.json';
import check from '../../assets/icons/check.png';

const Booking = (props) => {
	const {name} = props.match.params;
	const provider = providers.find(provider =>	provider.name === name);

	return(
		<>
			<div>
				<img src={elena} alt="user avatar"/>
				<div>
					<h3>{`Dr. ${provider.name}`}</h3>
					<p>{provider.type}</p>
				</div>
				<p>Please select desired date & time from below</p>
				{provider.times.map(avail => {
					return(
						<div key={uuid()} className="">
							<p>{avail.date}</p>
							<p>{avail.time}</p>
						</div>
					);
				})}
			</div>
			<button>Next</button>
		</>
	);
}

export default Booking;
