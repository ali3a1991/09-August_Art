import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <h1>Willkommen</h1>
      <Link to={'/arts'}>zu Seite</Link>
    </div>
  )
}

export default Home