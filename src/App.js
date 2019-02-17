import React, { useState } from 'react'
import cityDataService from './services/citydata'
import Display from './components/Display'
import DisplayHistory from './components/DisplayHistory'

const App = () => {

  const [targetCity, setTargetCity] = useState("select city...")
  const [currentData, setCurrentData] = useState([])
  const [savedCities, setSavedCities] = useState([])

  const getCityData = async (event) => {
    event.preventDefault()
    try {
      const city = await cityDataService.getData(targetCity)
      setCurrentData(formatCityData(city))
    } catch (error) {
      console.log(error)
    }
  }

  const formatCityData = (rawData) => {
    const data = {
      name: rawData.data.name,
      temp: rawData.data.main.temp,
      humidity: rawData.data.main.humidity,
      id: rawData.data.id
    }
    return data
  }

  const handleSaveClick = () => {
    return () => {
      const content = savedCities.map(city => city.name)
      if(!content.includes(currentData.name)) {
        setSavedCities(savedCities.concat(currentData))
      }
    }
  }

  const handleCityNameClick = (city) => () =>  setCurrentData(city)
    


  const handleInputChange = (event) => {
    setTargetCity(event.target.value)
  }

  const emptyInput = () => {
    if (targetCity === "select city...") {
      setTargetCity("")
    }
  }

  return (
    <div>
      <h1>Weatherstation</h1>
      <form onSubmit={getCityData}>
        <input
          value={targetCity}
          onChange={handleInputChange}
          onClick={emptyInput}
        />
        <button type="submit">Hae</button>
      </form>
      
      {Object.keys(currentData).length > 0 &&
        <div>
          <Display 
            currentData={currentData}
            handleSaveClick={handleSaveClick} 
          />
        </div>
      }
      {Object.keys(savedCities).length > 0 &&
        <div>
          <DisplayHistory 
            savedCities={savedCities} 
            handleCityNameClick={handleCityNameClick}
          />
        </div>
      }
      
    </div>
  )
}

export default App
