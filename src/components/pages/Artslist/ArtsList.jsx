import React, { useEffect, useState } from 'react'
import './ArtsList.scss'
import {dataApi} from '../../../utilities/dataApi'
import ArtsItem from '../../shared/ArtsItem/ArtsItem'

function ArtsList() {
  const [page, setPage] = useState(1)
  const [arts, setArts] = useState([]);
  const [isLaoding, setIsLaoding] = useState(true)
  const [limit,setLimit] = useState(6)

  const changeLimit = (event) => {
    setLimit(event.target.value)
  }

  useEffect(() => {
      fetch(`${dataApi}?page=${page}&limit=${limit}`)
      .then(res => res.json())
      .then(dataList => {
        setArts(dataList.data)
        setIsLaoding(false)
      })
  }, [page, limit])

  if (isLaoding) {
    return <p>Laoding...</p>
  }

  return (
    <div>
      <div className='btn'>
        <button onClick={() => setPage(page > 1 ? page - 1 : page)}>prew</button>
        <p>{page}</p>
        <button onClick={() => setPage(prevPage => prevPage + 1)}>next</button>
        <label htmlFor="">Limit=</label>
        <select onChange={changeLimit}>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
        </select>
      </div>
      <ul className='arts-list'>
        {arts.map(art => <ArtsItem
          key={art.id}
          id={art.id}
          artist={art.artist_title}
          title={art.title}
          dateEnd={art.date_end}
          imageId={art.image_id}
          page={page}
        />)}
      </ul>
    </div>
  )
}

export default ArtsList