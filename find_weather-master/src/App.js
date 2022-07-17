import React,{ useState } from 'react';
import {countries} from 'country-data';

const api={
  key: "12147c9b91e2486a3e98fec869ded1a5",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});  

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          //console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }    

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 20) ? ((weather.main.temp > 30) ? 'app warm' : 'app medium' ): ((weather.main.temp < 30) ? 'app medium' : 'app warm')) : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search..."             
            onChange={e=>setQuery(e.target.value)}
            value={query}
            onKeyPress={search} />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>          
          <div className="location-box" style={{textAlign:'center'}}>
          <img className="weather-icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            <div className="location">{weather.name}, {countries[weather.sys.country].name}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">{weather.weather[0].description}</div> 
            <div className="humidity">Humidity :- {weather.main.humidity}%</div> 
            <div className="wind">Wind :- {weather.wind.speed} km/h</div>                                 
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
