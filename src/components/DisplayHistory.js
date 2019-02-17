import React from 'react'
import City from './City'

const DisplayHistory = ({ savedCities, handleCityNameClick }) => {
    const rows = () => savedCities.map(city => 
        <City 
            key={city.id}
            city={city}
            handleCityNameClick={handleCityNameClick}
        />
    )
    return (
        <ul>
            {rows()}
        </ul>
    )
}

export default DisplayHistory