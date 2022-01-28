import React,{useContext} from 'react';
import WeathersContext from '../Context/WeathersContext';
import CityForm from './CityForm';

function Container() {

    const data = useContext(WeathersContext)

    

  return (
      <div className="container">
            <h1>Şehir:{data.location.name}/{data.location.country}</h1>

            <ul>
              <li>Sıcaklık: {data.temp.temp_c}</li>
              <li>Tarih: {data.location.localtime}</li>
              <li ><img src={data.icon.icon} /></li>
            </ul>
            <CityForm/>
      </div>
  )
}

export default React.memo(Container) ;
