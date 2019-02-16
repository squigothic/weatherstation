import React from 'react'

const SaveButton = ({ clickHandler }) => {
    return (
        <button onClick={clickHandler()}>
        Tallenna kaupunki
        </button>
    )
}

export default SaveButton