import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';

import ThermostatIcon from '@mui/icons-material/Thermostat';

const cities = ['Sarajevo', 'Mostar', 'Tuzla', 'New York'];

const App = () => {
  const [city, setCity] = useState('');  
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = (e, value) => {
    setCity(value);
  };

  const fetchWeatherData = async () => {
    try {
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a237636b683ca065f849f9b5dc2fd4b9&units=metric`);
      console.log(result.data);

      if (result.status === 200) {
        setWeatherData(result.data);
      }
    }
    catch (error) {
      console.error(error);
    };
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    } else {
      setWeatherData(null);
    }
    // eslint-disable-next-line
  }, [city]);
  console.log(city);

  return (
    <div className='App'> 
        <div className='title-wrapper'>
            <h1>Weather App</h1>
            <span>
              <ThermostatIcon fontSize="large" style={{ color: '#f5f5f5' }}/>
            </span> 
        </div>
        
        <div className='input-wrapper'>
         <Autocomplete 
            disablePortal
            id='city-search'
            options={cities}
            sx={{ width: 400}}
            onChange={(e, value) => handleChange(e, value)} 
            value={city}
            renderInput={(params) => (<TextField {...params} label='City'/>)}
         />
        </div>

        <div className='weather-wrapper'>
          {weatherData ? (
            <>
              <div className='weather-title'>
                <h3>{weatherData?.name}</h3>
              </div>
              <div className='weather-temperature'>
                <div>
                  <h4>Temperature:</h4>
                  <p>{Math.round(weatherData?.main?.temp)}&deg;C</p>
                </div>
                <div>
                  <h4>Feels like:</h4>
                  <p>{Math.round(weatherData?.main?.feels_like)}&deg;C</p>
                </div>
              </div>
              <div>
                <h2>{weatherData?.weather[0]?.main}</h2>
                <img 
                  src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`} 
                  alt="weather icon" 
                  width='120'
                  height='120'
                />
              </div>
              <div className='weather-humidity-windspeed'>
                <div>
                  <h4>Humidity:</h4>
                  <p>{weatherData?.main?.humidity}%</p>
                </div>
                <div>
                  <h4>Wind speed:</h4>
                  <p>{weatherData?.wind?.speed} km/h</p>
                </div>
              </div>
           </>
          ) : (
            <h4>No data available</h4>
          )}
        </div>
    </div>
  );
};

export default App;