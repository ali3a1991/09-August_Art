import React from 'react'
import './ArtsItem.scss'
import { Link, useLocation } from 'react-router-dom'

function ArtsItem(props) {
  const location = useLocation().pathname;
  console.log(location)

  return (
    <li className='arts-item'>
      <Link to={`/arts/${props.id}`}>
        <div className='frame'>
          <img src={`https://www.artic.edu/iiif/2/${props.imageId}/full/843,/0/default.jpg`} alt={props.title} />
        </div>
      </Link>
      <div className="art-item-title">
        <h1>{props.title}</h1>
        <h2>Artist: <span>{props.artist}</span></h2>
        <h3>Date End: <span>{props.dateEnd}</span></h3>
        {location !== '/arts' && (
        <div>
          <h3>Technique: <span>{props.technique}</span></h3>
          <h3>place of origin: <span>{props.place}</span></h3>
        </div>
        )}
      </div>
    </li>
  )
}

export default ArtsItem