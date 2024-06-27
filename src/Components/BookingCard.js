import bookinghospital from '../Assets/bookinghospital.png';
import thumbsup from '../Assets/thumbsup.png';

export default function BookingCard({booking}) {
  return (
    <div className='booking-card'>
        <img src={bookinghospital} alt='bookinghospital' />
        <div className='booking-card-text'>
            <h2 style={{color: '#14BEF0',fontWeight:600}}>{booking.hospitalName}</h2>
            <h3 style={{fontWeight:600}}>${booking.state}, ${booking.city}</h3>
            <p>Smilessence Center for Advanced Dentistry + 1 more</p>
            {booking.rating!=='Not Available' && <div className='booking-ratings'>
                <img src={thumbsup} alt='thumbsup' />
                <p>{booking.rating}</p>
            </div>}
        </div>
        <div className='booking-date-and-time'>
            <p>Today</p>
            <p>{booking.slot}</p>
        </div>
    </div>
  )
}
