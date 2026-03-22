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
        <Route path='/history' element={userData ? <History /> : <Navigate to="/auth" replace />} />
        <Route path='/notes' element={userData ? <Notes /> : <Navigate to="/auth" replace />} />
        <Route path='/pricing' element={userData ? <Pricing /> : <Navigate to="/auth" replace />} />

        <Route path='/payment-success' element={<PaymentSuccess />} />
        <Route path='/payment-failed' element={<PaymentFailed />} />
      </Routes>

    </>
  )
}

export default App
