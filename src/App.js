import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Background from './components/Background';
import './components/Background.css';
const API_KEY ='7a05b5388f5d416d5f1308a821fe07b3';

class App extends Component {
  state={
    temperature:undefined,
    description:undefined,
    city:undefined,
    country:undefined,
    error:undefined,
    humidity:undefined,
    bg:'bg',
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    if(data.cod==="404"){
      this.setState({
          temperature:undefined,
          description:undefined,
          city:undefined,
          country:undefined,
          humidity:undefined,
          bg:'bg', 
          error:"City Not found",
      })
    }
    else if(city && country){
      console.log(data.cod);
      this.setState({
        temperature:(data.main.temp-273.15),
        description:data.weather[0].description,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        bg:data.weather[0].description,
        error:"",
    })
    }
    else{
       // console.log(data);
        this.setState({
          temperature:undefined,
          description:undefined,
          city:undefined,
          country:undefined,
          humidity:undefined,
          bg:'bg', 
          error:"Please enter valid values",
      })
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

        
        
export default App;
