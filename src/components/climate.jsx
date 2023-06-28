import React, { useState, useEffect } from 'react';
 import axios from 'axios';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=london&appid={your-api-key}&units=metric`
      );
      setWeatherData(data);
    };
    fetchData();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // call API with new city value
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed}km/h</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
