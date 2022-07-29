import './BottomBar.scss';
import HomeIcon from '../../assets/icons/home.svg';
import CalendarIcon from '../../assets/icons/calendar.png';
import BellIcon from '../../assets/icons/bell.png';
import ProfileIcon from '../../assets/icons/profile.png';

function BottomBar () {

	return (
        <footer className='bottom__bar'>
            <img src={HomeIcon} alt="Home Icon"></img>
            <img src={CalendarIcon} alt="Calendar Icon"></img>
            <img src={BellIcon} alt="Bell Icon"></img>
            <img src={ProfileIcon} alt="Profile Icon"></img>
        </footer>	
	);
}

export default BottomBar;
