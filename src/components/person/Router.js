import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Full from './Full'
import List from './List'
import New from './New'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/new" element={<New />} />
      <Route path="/:id" element={<Full />} />
    </Routes>
  )
}
