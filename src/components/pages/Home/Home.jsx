import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <h1>Herzlich Willkommen</h1>
      <Link to={'/arts'} className='to-website'>zur meine Ausstellung</Link>
    </div>
  )
}

export default Home