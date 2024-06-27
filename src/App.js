import './App.css';
import HomePage from './Pages/HomePage';
import MyBookings from './Pages/MyBookings';
import SearchResults from './Pages/SearchResults';
import { createContext,useEffect,useState } from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
export const Context = createContext();

function App() {
  const [myBookings,setMyBookings] = useState([]);

  useEffect(()=>{
      setMyBookings(JSON.parse(localStorage.getItem('bookings')));
  },[])

  const [statesData,setStatesData] = useState([]);
  const [selectedState,setSelectedState] = useState('');
  const [citiesData,setCitiesData] = useState([]);
  const [selectedCity,setSelectedCity] = useState('');
  const [hospitals,setHospitals] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Context.Provider value={{statesData,setStatesData,
          selectedState,setSelectedState,
          citiesData,setCitiesData,
          selectedCity,setSelectedCity,
          hospitals,setHospitals,myBookings
        }}>
          <Routes>
            <Route exact path='/' Component={HomePage} />
            <Route path='/SearchResults' Component={SearchResults} />
            <Route path='/MyBookings' Component={MyBookings} />
          </Routes>   
        </Context.Provider>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
