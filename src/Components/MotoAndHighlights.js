import happypatients from '../Assets/happypatients.png';
import laboratories from '../Assets/laboratories.png';
import hospitals from '../Assets/hospitals.png';
import expertdoctors from '../Assets/expertdoctors.png';

export default function MotoAndHighlights() {
  return (
    <div className='MotoAndHighlights'>
        <div className='moto'>
            <h5>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h5>
            <h1>Our Families</h1>
            <h6>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</h6>
        </div>
        <div className='moto-highlights'>
            <div className='moto-highlights-group1'>
                <div className='moto-highlight'>
                    <img src={happypatients} alt='happypatients' />
                    <h1>5000+</h1>
                    <h6>happy patients</h6>
                </div>
                <div className='moto-highlight'>
                    <img src={laboratories} alt='laboratories' />
                    <h1>1000+</h1>
                    <h6>Laboratories</h6>
                </div>
            </div>
            <div className='moto-highlights-group2'>
                <div className='moto-highlight'>
                    <img src={hospitals} alt='hospitals' />
                    <h1>200+</h1>
                    <h6>Hospitals</h6>
                </div>
                <div className='moto-highlight'>
                    <img src={expertdoctors} alt='expertdoctors' />
                    <h1>700+</h1>
                    <h6>Expert doctors</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
