import React, {useState} from 'react';
import './App.css';

import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = "bedb43d58e5d5f615f32b9992af27cd6";

function App() {

  const [weather, setweather] = useState({
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  })

  const getWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){
      //console.log(data);
    setweather({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:''
    })
    }else{
      setweather({
        temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'Please enter value'
      })
    }
    
  }

  return (
    <div className="App">
      <div>
      <Title/>
      </div>
      <div>
      <Form getWeather={getWeather}/>
      <Weather temp={weather.temperature} city={weather.city} country={weather.country} humidity={weather.humidity}
      description={weather.description} error={weather.error}/>
      </div>
    </div>
  );
}

export default App;
