import React from 'react'

const CardFront = ({ data, handleOpenCard }) => {
    return(
        <button className="button" onClick={handleOpenCard}>
            <p className="name">
                <span>{data.first_name}</span> <span>{data.last_name}</span>
            </p>
        </button>
    )

}

export default CardFront