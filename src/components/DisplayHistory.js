import React from 'react'
import City from './City'

const DisplayHistory = ({ savedCities }) => {
    const rows = () => savedCities.map(city => 
        <City 
            key={city.id}
            city={city}
        />
    )
    return (
        <ul>
            {rows()}
        </ul>
    )
}

export default DisplayHistory