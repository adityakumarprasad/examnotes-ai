import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
export const serverUrl = "http://localhost:3000"
import { getCurrentUser } from './services/api'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    getCurrentUser(dispatch)
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path='/' element={userData ? <Home /> : <Navigate to="/auth" replace />} />
        <Route path='/auth' element={userData ? <Navigate to="/" replace /> : <Auth />} />
      </Routes>

    </>
  )
}

export default App
