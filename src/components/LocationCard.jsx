import React from "react"

const LocationCard = ({info}) => {
    
    return (
        <article> 
            <h2>{info?.name}</h2>
            <ul>
                <li><span>Type: </span><span>{info?.type}</span></li>
                <li><span>Dimension: </span><span>{info?.dimension}</span></li>
                <li><span>Population: </span><span>{info?.residents.length}</span></li>
            </ul>
        </article>
    )
}

export default LocationCard;