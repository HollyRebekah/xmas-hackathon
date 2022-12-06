import React from 'react'

import malcolmImage from '../assets/christmas_malcolm.png';
import Music from './Music';


const CardInner = ({ data }) => {
    return (
        <div className="message-container">
            <Music />
            <img className="malcolm-img" alt="malcolm" src={malcolmImage} />
            <p className="message">{data.message}</p>
        </div>
    )
}

export default CardInner