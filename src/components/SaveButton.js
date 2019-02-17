import React from 'react'

const SaveButton = ({ clickHandler }) => {
    return (
        <button onClick={clickHandler()}>
        Save location
        </button>
    )
}

export default SaveButton