import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/pages/Home/Home'
import ArtsList from './components/pages/Artslist/ArtsLIst'
import ArtsDetails from './components/pages/ArtsDetails/ArtsDetails'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/arts' element={<ArtsList/>} />
        <Route path='/arts/:id' element={<ArtsDetails/>} />
      </Routes>
    </>
  )
}

export default App
