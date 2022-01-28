import { createContext,useState ,useEffect} from "react"
import axios from 'axios';

const WeathersContext = createContext();


export const WeatherProvider=({children})=>{

    const [city,setCity]=useState("Yozgat");
    const [temp,setTemp]=useState({})
    const [icon,setIcon]=useState({})
    const [location,setLocation]=useState({})

    useEffect(()=>{
        axios(`https://api.weatherapi.com/v1/current.json?key=77ae0c7ebf634357add215245222601&q=${city}&aqi=yes`)
        .then((res)=>setTemp(res.data.current))
      },[city])

      useEffect(()=>{
        axios(`https://api.weatherapi.com/v1/current.json?key=77ae0c7ebf634357add215245222601&q=${city}&aqi=yes`)
        .then((res)=>setIcon(res.data.current.condition))
      },[city])


      useEffect(()=>{
        axios(`https://api.weatherapi.com/v1/current.json?key=77ae0c7ebf634357add215245222601&q=${city}&aqi=yes`)
        .then((res)=>setLocation(res.data.location))
      },[city])



      const data = {temp,location,setCity,icon}
    


    return <WeathersContext.Provider value={data}>{children}</WeathersContext.Provider>

}


export default WeathersContext;