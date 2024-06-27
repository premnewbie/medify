import { useEffect, useState } from 'react'
import NavigationBar from '../Components/NavigationBar'
import SearchBar from '../Components/SearchBar'
import'./HomePage.css';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';
import tick from '../Assets/tick.png';
import HospitalCard from '../Components/HospitalCard';
import {fetchMedicalCenters} from '../API/Api.js';
import { Context } from "../App.js";
import { useContext } from 'react';
import limitedoffer from '../Assets/limitedoffer.png';

export default function SearchResults() {

    let {selectedState,selectedCity,hospitals,setHospitals} = useContext(Context);

    useEffect(()=>{
        fetchMedicalCenters(selectedState,selectedCity).then((data) => setHospitals(data));
    },[selectedCity])

  return (
    <div>
        <div style={{backgroundColor:"#2AA7FF",paddingBottom:'3rem'}}>
            <NavigationBar />
        </div>
        <SearchBar />
        <div className='search-results-top'>
            <h2>{hospitals?.length} medical centers available in {selectedState}</h2>
            <div className='bookings'>
                <img src={tick} alt='tick' />
                <h6 style={{color:'#787887'}}>Book appointments with minimum wait-time & verified doctor details</h6>
            </div>            
        </div>
        <div style={{display:'flex',gap:'2rem'}}>
            <div>
                {hospitals?.map((hospital) => (<HospitalCard key={hospital['Hospital Name']} Hospital={hospital}/>))}
            </div>
            <img src={limitedoffer} alt='limitedoffer' className="limitedoffer"/>
        </div>
        <FAQ />
        <Footer />
    </div>
  )
}
