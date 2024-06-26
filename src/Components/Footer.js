import mobiles from '../Assets/mobiles.png';
import curvedarrow from '../Assets/curvedarrow.png';
import googleplay from '../Assets/googleplay.png';
import appstore from '../Assets/appstore.png';
import medifylogo from '../Assets/medifylogo.png';
import facebook from '../Assets/facebook.png';
import twitter from '../Assets/twitter.png';
import youtube from '../Assets/youtube.png';
import pinterest from '../Assets/pinterest.png';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='download'>
          <img src={mobiles} alt='mobiles' className='mobiles' />
          <img src={curvedarrow} alt='curvedarrow' className='curvedarrow' />
          <div className='download-text'>
            <h1>Download the</h1>
            <div className='download-heading2'>
              <h1 style={{color:'#2AA7FF'}}>Medify</h1>
              <h1>App</h1>
            </div>
            <h6 style={{color:'#414146',fontWeight:600}}>Get the link to download the app</h6>
            <div className='mobile-number'>
              <p>+91</p>
              <input placeholder='Enter phone number' />
              <button>Send SMS</button>
            </div>
            <div className='download-stores'>
              <img src={googleplay} alt='googleplay' />
              <img src={appstore} alt='appstore' />
            </div>
          </div>
      </div>
      <div className='footer-container'>
        <div className='img-and-points'>
          <div className='footer-imgs'>
            <div>
              <img src={medifylogo} alt='medifylogo' />
            </div>
            <div className='follow-on'>
              <img src={facebook} alt='facebook' />
              <img src={twitter} alt='twitter' />
              <img src={youtube} alt='youtube' />
              <img src={pinterest} alt='pinterest' />
            </div>
          </div>
          <div className='footer-points'>
            <h5>{'> About Us'}</h5>
            <h5>{'> Our Pricing'}</h5>
            <h5>{'> Our Gallery'}</h5>
            <h5>{'> Appointment'}</h5>
            <h5>{'> Privacy Policy'}</h5>
            <h5>{'> Orthology'}</h5>
            <h5>{'> Neurology'}</h5>
            <h5>{'> Dental Care'}</h5>
            <h5>{'> Opthalmology'}</h5>
            <h5>{'> Cardiology'}</h5>
            <h5>{'> About Us'}</h5>
            <h5>{'> Our Pricing'}</h5>
            <h5>{'> Our Gallery'}</h5>
            <h5>{'> Appointment'}</h5>
            <h5>{'> Privacy Policy'}</h5>
          </div>
        </div>
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  )
}
