import doctoricon from '../Assets/doctoricon.png';
import labicon from '../Assets/labicon.png';
import hospitalicon from '../Assets/hospitalicon.png';
import drugicon from '../Assets/drugicon.png';
import ambulanceicon from '../Assets/ambulanceicon.png';
import SearchBar from './SearchBar';

const SearchBarAndIcons = () => {
    return ( 
        <div className='searchbar-and-icons'>
            <SearchBar />
            <p>You may be looking for</p>
            <div className='icons-under-search'>
                <div>
                    <img src={doctoricon} alt='doctoricon' />
                    <p>Doctors</p>
                </div>
                <div>
                    <img src={labicon} alt='doctoricon' />
                    <p>Labs</p>
                </div>
                <div>
                    <img src={hospitalicon} alt='doctoricon' />
                    <p>Hospitals</p>
                </div>
                <div>
                    <img src={drugicon} alt='doctoricon' />
                    <p>Medical Store</p>
                </div>
                <div>
                    <img src={ambulanceicon} alt='doctoricon' />
                    <p>Ambulance</p>
                </div>
            </div>
        </div>
     );
}
 
export default SearchBarAndIcons;