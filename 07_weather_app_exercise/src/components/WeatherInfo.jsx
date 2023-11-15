import React from 'react';

const WeatherInfo = ({ weatherData }) => {
  return (
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

            <div className='weather-image'>
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
  );
};

export default WeatherInfo;