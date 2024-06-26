import consultation1 from '../Assets/consultation1.png';
import consultation2 from '../Assets/consultation2.png';
import phoneicon from '../Assets/phoneicon.png';
import tickicon from '../Assets/tickicon.png';

const ConsultationLayout = () => {
    return ( 
        <div className='consultation-layout'>        
            <div className='consultation-layout-img'>
                <div className='consulation-imgs'>        
                    <div className='consulation-popup'>
                        <img src={phoneicon} alt='phoneicon' />
                        <h5>Free Consultation</h5>
                        <p>Consultation with the best</p>
                    </div>    
                    <img src={consultation1} alt='consultation1' id='consultation1' />            
                    <img src={consultation2} alt='consultation2' id='consultation2' />               
                </div>
            </div>
            <div className='consulation-layout-text'>
                <h3>HELPING PATIENTS FROM AROUND THE GLOBE!!</h3>                
                <h1 id='consulation-heading-1'>Patient</h1>
                <h1 id='consulation-heading-2'>Caring</h1>    
                <p>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p> 
                <div className='consulation-highlights'>
                    <img src={tickicon} alt='tickicon' />
                    <h6>Stay Updated About Your Health</h6>
                </div> 
                <div className='consulation-highlights'>
                    <img src={tickicon} alt='tickicon' />
                    <h6>Check Your Results Online</h6>
                </div> 
                <div className='consulation-highlights'>
                    <img src={tickicon} alt='tickicon' />
                    <h6>Manage Your Appointments</h6>
                </div>   
            </div>
        </div> 
    );
}
 
export default ConsultationLayout;