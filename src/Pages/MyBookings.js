import NavigationBar from "../Components/NavigationBar";
import searchlogo from '../Assets/searchlogo.png';
import Footer from "../Components/Footer";
import BookingCard from "../Components/BookingCard.js";
import { Context } from "../App.js";
import { useContext, useEffect } from 'react';
import limitedoffer from '../Assets/limitedoffer.png';

export default function MyBookings() {
    let {myBookings} = useContext(Context);

    useEffect(() => {
        console.log(myBookings)
    },[])

  return (
    <div>
        <div className="my-bookings-header">
            <NavigationBar />
            <h1>My Bookings</h1>
            <div className="booking-search">
                <input value='' type='text' placeholder="Search By Hospital"/>
                <button>
                    <img src={searchlogo} alt='searchlogo' />
                    Search
                </button>
            </div>
        </div>
        <div style={{display:'flex',gap:'2rem'}}>
            <div>
                {myBookings?.map((booking) => <BookingCard booking={booking} />)}
            </div>           
            <img src={limitedoffer} alt='limitedoffer' className="limitedoffer"/>
        </div>
        <Footer />
    </div>
  )
}
