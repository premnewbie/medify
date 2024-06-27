import { Link } from "react-router-dom";

export default function Slot({Hospital,selectedState,selectedCity,myBookings}) {

    const handleSlot = (value) =>{
        let obj = {'slot': value,'hospitalName': Hospital["Hospital Name"],'state': selectedState,'city': selectedCity,'rating': Hospital['Hospital overall rating']};
        if(myBookings){
            myBookings.push(obj);
            localStorage.setItem('bookings',JSON.stringify(myBookings));
        } else{
            localStorage.setItem('bookings',JSON.stringify(obj));
        }        
    }
    
  return (
    <div className='booking-slots'>
        <div className='slot-headers'>
            <p>{"<"}</p>
            <div style={{borderBottom: '5px solid #14BEF0'}} className='slot-header'>
                <h3>Today</h3>
                <h6>11 Slots Available</h6>
            </div>
            <div className='slot-header'>
                <h3>Tomorrow</h3>
                <h6>17 Slots Available</h6>
            </div>
            <div className='slot-header'>
                <h3>Fri, 5 May</h3>
                <h6>11 Slots Available</h6>
            </div>
            <p>{">"}</p>
        </div>
        <div className='sessions-and-slots'>
            <div className='sessions'>
                <h4>Morning</h4>
                <h4>Afternoon</h4>
                <h4>Evening</h4>
            </div>
            <div className='slot-buttons'>
                <div>
                    <Link to={"/myBookings"}>
                        <button onClick={()=> handleSlot('11:30 AM')}>11:30 AM</button>
                    </Link>
                </div>
                <div>
                    <Link to={"/myBookings"}>
                        <button onClick={()=> handleSlot('12:00 PM')}>12:00 PM</button>
                    </Link>
                    <Link to={"/myBookings"}>
                        <button onClick={()=> handleSlot('12:30 PM')}>12:30 PM</button>
                    </Link>
                    <Link to={"/myBookings"}>
                        <button onClick={()=> handleSlot('01:30 PM')}>01:30 PM</button>
                    </Link>
                    <Link to={"/myBookings"}>
                        <button onClick={()=> handleSlot('02:00 PM')}>02:00 PM</button>
                    </Link>
                    <Link to={"/myBookings"}>
                        <button onClick={()=> handleSlot('02:30 PM')}>02:30 PM</button>
                    </Link>
                </div>
                <div>
                    <Link to={"/myBookings"}>
                        <button onClick={()=> handleSlot('06:00 PM')}>06:00 PM</button>
                    </Link>
                    <Link to={"/myBookings"}>
                        <button onClick={()=> handleSlot('06:30 PM')}>06:30 PM</button>
                    </Link>
                    <Link to={"/myBookings"}>
                        <button onClick={()=> handleSlot('07:00 PM')}>07:00 PM</button>
                    </Link>
                    <Link to={"/myBookings"}>
                        <button onClick={()=> handleSlot('07:30 PM')}>07:30 PM</button>
                    </Link>                       
                </div>
            </div>
        </div>
    </div>
  )
}
