import { useEffect, useState } from 'react';
import axios from 'axios';

import ThermostatIcon from '@mui/icons-material/Thermostat';
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';

import './App.css';

const cities = ['Sarajevo', 'Mostar', 'Tuzla'];

const App = () => {
  const [city, setCity] = useState('');  

  const handleChange = (e, value) => {
    setCity(value);
  };

  const fetchWeatherData = async () => {
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a237636b683ca065f849f9b5dc2fd4b9&units=metric`);

    console.log(result);
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    };
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
          <p>Test</p>
        </div>
    </div>
  );
};

export default App;