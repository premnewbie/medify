import axios from "axios";

export const fetchState= async ()=>{
    try{
        const response=await axios.get(`https://meddata-backend.onrender.com/states`)
        return response.data;
    }catch(e){
        console.error(e)
    }
}
export const fetchCities= async (states)=>{
    if(states.length===0)return;
    try{
        const response=await axios.get(`https://meddata-backend.onrender.com/cities/${states}`)
        return response.data;
    }catch(e){
        console.error(e)
    }
}
export const fetchMedicalCenters= async (state,city)=>{
    if(!state || !city)
        return
    try{
        const response=await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
        return response.data;
    }catch(e){
        console.error(e)
    }
}
