import labicon from '../Assets/labicon.png';
import stethoscopeicon from '../Assets/stethoscopeicon.png';
import cardiologyicon from '../Assets/cardiologyicon.png';
import mriicon from '../Assets/mriicon.png';
import bloodtesticon from '../Assets/bloodtesticon.png';
import piscologisticon from '../Assets/piscologisticon.png';
import xrayicon from '../Assets/xrayicon.png';

const Specialisation = () => {
    return ( 
        <div className='specialisation'>
            <h2>Find by specialisation</h2>
            <div className='specialisation-icons'>
                <div className='specialisation-icon'>
                    <img src={labicon} alt='labicon' />
                    <p>Dentistry</p>
                </div>
                <div className='specialisation-icon'>
                    <img src={stethoscopeicon} alt='stethoscopeicon' />
                    <p>Primary Care</p>
                </div>
                <div className='specialisation-icon'>
                    <img src={cardiologyicon} alt='cardiologyicon' />
                    <p>Cardiology</p>
                </div>
                <div className='specialisation-icon'>
                    <img src={mriicon} alt='mriicon' />
                    <p>MRI Resonance</p>
                </div>
                <div className='specialisation-icon'>
                    <img src={bloodtesticon} alt='bloodtesticon' />
                    <p>Blood Test</p>
                </div>
                <div className='specialisation-icon'>
                    <img src={piscologisticon} alt='piscologisticon' />
                    <p>piscologist</p>
                </div>
                <div className='specialisation-icon'>
                    <img src={labicon} alt='labicon' />
                    <p>Laboratory</p>
                </div>
                <div className='specialisation-icon'>
                    <img src={xrayicon} alt='xrayicon' />
                    <p>X-ray</p>
                </div>
            </div>
            <button>View All</button>
        </div>
    );
}
 
export default Specialisation;