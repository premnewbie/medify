import { useEffect } from 'react';
import searchlogo from '../Assets/searchlogo.png';
import { fetchState,fetchCities } from '../API/Api';
import { Context } from "../App.js";
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function SearchBar() {
  let {statesData,setStatesData,selectedState,setSelectedState,citiesData,setCitiesData,selectedCity,setSelectedCity} = useContext(Context);

  useEffect(()=>{
    fetchState().then((data) => setStatesData(data))
  },[])

  useEffect(()=>{
    fetchCities(selectedState).then((data) => setCitiesData(data))
  },[selectedState])

  return (
    <div className='searchbars-and-button'>
        <div>
            <img src={searchlogo} alt='searchlogo' />
            <select name='state' id='state' onInput={(e) => setSelectedState(e.target.value)}>
              <option value=''></option>
              {statesData?.map((state)=>(<option key={state} value={state}>{state}</option>))}
            </select>
        </div>
        <div>
            <img src={searchlogo} alt='searchlogo' />
            <select name='city' id='city' onInput={(e) => setSelectedCity(e.target.value)}>
              <option value=''></option>
              {citiesData?.map((city)=>(<option key={city} value={city}>{city}</option>))}
            </select>
        </div>
        <div>
          <Link to={'/SearchResults'}>
            <button>Search</button>          
          </Link>            
        </div>
    </div>
  )
}
