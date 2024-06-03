import React from 'react'
import cardData from '../data/card-data.json';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

export default function Pike() {

    const { title } = useParams();
    const place = title;

    let thePlace = _.find(cardData, { title: title });
    if (!thePlace) {
        return <div>Place not found!</div>;
    }
    return (
        <div className='container'>
            <div className='detail-style'>
                <h2>{thePlace.title}</h2>
                <img className="fixed-size-image" src={'../'+ thePlace.image} alt={thePlace.altTag} />
                <p>Description: {thePlace.description}</p>
                <p>Operating Hour: {thePlace.operatingHours}</p>
                <p>Address: {thePlace.address}</p>
                <p>Minimum Cost: {thePlace.minimumCost}</p>
                <p>Estimated Duration: {thePlace.estimatedDuration}</p>
            </div>
        </div>
    )
} 
