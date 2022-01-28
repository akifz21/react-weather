import React,{ useContext,useMemo } from 'react';
import WeathersContext from '../Context/WeathersContext';
import {useFormik} from 'formik'


function CityForm() {
  
  
  const {setCity}=useContext(WeathersContext)



  const formik = useFormik({
    initialValues:{
      cityName:""
    },
    onSubmit: values=>{
     setCity(values.cityName)
    }

  })

   
  return (
      <div className="form-div">

        <form  onSubmit={formik.handleSubmit}>
          <label htmlFor="cityName">Şehir Adı:  </label>
          <input className="form-input"
          type="text"
          name="cityName"
          onChange={formik.handleChange}
          value={formik.values.cityName} 
          />


        <button className="btn" type="submit">Göster</button>
        </form>
          

      </div>
  )
}

export default React.memo(CityForm) 