import React from 'react';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const WeatherHeader = () => {
  return (
    <div className='title-wrapper'>
        <h1>Weather App B&H</h1>
        <span><ThermostatIcon fontSize="large" style={{ color: '#f5f5f5' }}/></span> 
    </div>
  );
}

export default WeatherHeader;