import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import WeatherHeader from './components/WeatherHeader';
import WeatherInput from './components/WeatherInput';
import WeatherInfo from './components/WeatherInfo';

const cities = ['Sarajevo', 'Mostar', 'Banja Luka', 'Tuzla', 'Zenica', 'Bihac', 'Trebinje', 'Bijeljina', 'Visoko', 'Jajce', 'Kakanj', 'Livno', 'Neum'];
const webPage = `https://api.openweathermap.org/data/2.5/weather`;
const apiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [city, setCity] = useState('');  
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = (e, value) => {
    setCity(value);
  };

  const fetchWeatherData = async () => {
    try {
      const result = await axios.get(`${webPage}?q=${city}&appid=${apiKey}&units=metric`);
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
        <WeatherHeader />
        <WeatherInput 
            cities={cities}
            handleChange={handleChange}
            city={city}
        />
        <WeatherInfo weatherData={weatherData}/>
    </div>
  );
};

export default App;