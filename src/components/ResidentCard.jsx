import React from 'react'
import useFetch from '../assets/hooks/useFetch';
import {useEffect} from 'react'

const ResidentCard = ({info}) => {

    const [resident, getResident] = useFetch();

    useEffect(() => {
        getResident(info);
    }, []);
    
  return (
    <article>
        <figure>
            <img src={resident?.image} alt="character image" />
            <figcaption>
                <div className='circle'></div>
                <span>{resident?.status}</span>
            </figcaption>
        </figure>
        <h2>{resident?.name}</h2>
        <hr />
        <ul>
            <li><span>Specie: </span><span>{resident?.species}</span></li>
            <li><span>origin: </span><span>{resident?.origin.name}</span></li>
            <li><span>Episodes where appear: </span><span>{resident?.episode.length}</span></li>
        </ul>
    </article>
  )
}

export default ResidentCard;