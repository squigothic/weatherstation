import React from 'react'

const City = ({ city, handleCityNameClick }) => {
    return (
        <li onClick={handleCityNameClick(city)}>{ city.name }</li>
    )
}

export default City
