import medifylogo from '../Assets/medifylogo.png';

const NavigationBar = () => {
    return ( 
    <div className="navigation-bar">
        <p>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
        <div className="navigation-items">
            <img src={medifylogo} alt="medify-logo" />
            <div className="navigation-options">
                <span>Find Doctors</span>
                <span>Hospitals</span>
                <span>Medicines</span>
                <span>Surgeries</span>
                <span>Software for Provider</span>
                <span>Facilities</span>
                <button>My Bookings</button>
            </div>
        </div>
    </div> );
}
 
export default NavigationBar;