import React, { useEffect, useState } from 'react'
import './ArtsDetails.scss'
import { dataApi } from '../../../utilities/dataApi'
import { useParams } from 'react-router-dom'
import ArtsItem from '../../shared/ArtsItem/ArtsItem';

function ArtsDetails() {
  const artId = useParams().id;
  const [art, setArt] = useState({})

  useEffect(() => {
    fetch(dataApi)
      .then(res => res.json())
      .then(dataList => {
        const data = dataList.data.find(artItem => artItem.id === Number(artId));
        setArt(data);
      })
  }, [])

  return (
    <div>
      <ArtsItem className="frame-size"
        artist={art.artist_title}
        title={art.title}
        dateEnd={art.date_end}
        imageId={art.image_id}
        technique={art.technique_titles}
        place={art.place_of_origin}
      />
    </div>
  )
}

export default ArtsDetails