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
        <div>
            <h3>Previously searched cities</h3>
            <p>click to show weather</p>
            <ul>
                {rows()}
            </ul>
        </div>
    )
}

export default DisplayHistory