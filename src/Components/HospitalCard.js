import bookinghospital from '../Assets/bookinghospital.png';
import thumbsup from '../Assets/thumbsup.png';
import { Context } from "../App.js";
import { useContext, useState } from 'react';
import Slot from './Slot.js';


export default function HospitalCard({Hospital}) {

    let {selectedState,selectedCity,myBookings} = useContext(Context);
    const [book,setBook] = useState(false);
      
  return (
    <div className='card-and-slots'>
        <div className='hospital-card'>
            <img src={bookinghospital} alt='bookinghospital' />
            <div className='hospital-card-text'>
                <h2 style={{color: '#14BEF0',fontWeight:600}}>{Hospital['Hospital Name']}</h2>
                <h3 style={{fontWeight:600}}>${selectedState}, ${selectedCity}</h3>
                <p>Smilessence Center for Advanced Dentistry + 1 more</p>
                <div className='offer-fee'>
                    <p>FREE</p>
                    <p style={{textDecoration:'line-through'}}>₹500</p>
                    <p>Consultation fee at clinic</p>
                </div>
                {Hospital['Hospital overall rating']!=='Not Available' && !book && <div className='ratings'>
                    <img src={thumbsup} alt='thumbsup' />
                    <p>{Hospital['Hospital overall rating']}</p>
                </div>}
            </div>
            <div className='booking-button'>
                <h5>Available Today</h5>
                <button onClick={()=>setBook((prev) => !prev)}>Book FREE Center Visit</button>
            </div>
        </div>
        {book && <Slot Hospital={Hospital} selectedState={selectedState} selectedCity={selectedCity} myBookings={myBookings} />}
    </div>
    
  )
}
