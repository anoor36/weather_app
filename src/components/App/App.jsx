import {useState} from 'react'
import axios from 'axios'

const App = () => {
  const[weather,setWeather]=useState({})
  const [cityName,setCityName]=useState('')

  const getWeatherData=(e)=>{
    e.preventDefault()
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f31778acd606a99beab23e81ffe09e3a&units metric`)
    .then( ({data})=>{
      setWeather(data)
      setCityName('')  
    })
  }


  const inputHandler=(e)=>{
    setCityName(e.target.value)
  }
  return (
    <div className="container">
      <form onSubmit={getWeatherData}>
        <input type="text"
        placeholder='Введите ваш город'
        value={cityName} 
        onChange={inputHandler}
        />
      <button type='submit'>Искать</button>
      </form>
      {JSON.stringify(weather)}
    </div>
  )
}

export default App
