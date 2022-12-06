import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Snowfall from 'react-snowfall'

import CardInner from './CardInner'
import CardFront from './CardFront';

import { employeeData } from '../data';
import backgroundImage from '../assets/christmas_card.jpg';

import paddyImage from '../assets/paddy.png';
import './ChristmasCard.css';

const ChristmasCard = () => {
    const [openCard, setOpenCard] = useState(false);
    const { id } = useParams();
    const matchingData = employeeData[id - 1];

    return (
        <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Snowfall snowflakeCount={500} />
            {!openCard ? 
                <CardFront data={matchingData} handleOpenCard={() => setOpenCard(true)} /> : 
                <CardInner data={matchingData} />
            }
        <img className="paddy" alt="paddy" src={paddyImage} />
        </div>
    )
}

export default ChristmasCard;