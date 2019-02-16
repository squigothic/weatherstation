import React from 'react'
import SaveButton from './SaveButton'

const Display = ({ currentData, handleSaveClick }) => {
    //console.log('currentin sisältö: ', currentData)
    return (
        <div>
            <h2>{`Current weather in ${currentData.name}`}</h2>
            <ul>
                <li>Temp: {currentData.temp}</li>
                <li>Humidity: {currentData.humidity}</li>
            </ul>
            <SaveButton clickHandler={handleSaveClick} />
        </div>
    )
}

export default Display