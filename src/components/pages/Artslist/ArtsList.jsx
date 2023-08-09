import React, { useEffect, useState } from 'react'
import './ArtsList.scss'
import {dataApi} from '../../../utilities/dataApi'
import ArtsItem from '../../shared/ArtsItem/ArtsItem'

function ArtsList() {
  const [arts, setArts] = useState([])

  useEffect(() => {
    fetch(dataApi)
      .then(res => res.json())
      .then(dataList => setArts(dataList.data))
  }, [])

  return (
    <ul className='arts-list'>
      {arts.map(art => <ArtsItem
        key={art.id}
        id={art.id}
        artist={art.artist_title}
        title={art.title}
        dateEnd={art.date_end}
        imageId={art.image_id}
      />)}
    </ul>
  )
}

export default ArtsList