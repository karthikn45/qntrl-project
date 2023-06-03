import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Feature_Tour from './pages/Feature_Tour'
import Orchestration_Gallery from './pages/Orchestration_Gallery'
import Pricing from './pages/Pricing'
import Resources from './pages/Resources'
import Solutions from './pages/Solutions'
import Our_Story from './pages/Our_Story'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Feature_Tour' element={<Feature_Tour/>}/>
        <Route path='Orchestration_Gallery' element={<Orchestration_Gallery/>}/>
        <Route path='Pricing' element={<Pricing/>}/>
        <Route path='Resources' element={<Resources/>}/>
        <Route path='Solutions' element={<Solutions/>}/>
        <Route path='Our_Story' element={<Our_Story/>}/>
    </Routes>
  )
}

export default App