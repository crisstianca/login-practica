import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const Routes = () => {
  return (
    
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
    </Routes>
  )
}
