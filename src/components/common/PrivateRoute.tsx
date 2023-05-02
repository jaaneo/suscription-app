import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface Props {
  Component: React.FC
}

export default function PrivateRoute({ Component }: Props) {
  const { token } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true })
    }
  })

  if (!token) {
    return null
  }

  return <Component />
}
