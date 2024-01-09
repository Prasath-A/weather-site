import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {
  const API_KEY="efab2abdf24b25712a8ddf3f4039c72a";

  const [city,setCity]=useState('');
  const [temperature,setTemp]=useState('');
  const getCity=(e)=>{
    setCity(e.target.value)
  }
  const getvalue=async()=>{
    const temp_data=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
     setTemp(temp_data.data.main.temp)
     console.log(temp_data.data.main.temp)
  }
  return (
    <div className='container'>
    <div className='inner'>
    <h1>weather app</h1>
    <input type='textbox' value={city} onChange={getCity}></input>
    <button onClick={getvalue}>submit</button>
    {
      temperature &&
      <div className='result'>
     {temperature} temperature in {city}
    </div>
    }
    </div>
    </div>
  );
}

export default App;
