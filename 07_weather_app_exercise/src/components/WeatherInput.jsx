import React from 'react';

import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';

const WeatherInput = ({ cities, city, handleChange }) => {
  return (
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
  );
};

export default WeatherInput;