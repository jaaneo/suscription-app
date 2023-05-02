import React, { createContext, useContext, useState } from 'react'

interface AuthContextData {
  token: string
  userId: string
  registerToken: (receivedToken: string) => void
  deleteToken: () => void
}

const AuthContext = createContext<AuthContextData | null>(null)

interface Props {
  children: React.ReactNode
}

const TOKEN_KEY = 'task-app::token'

export function AuthProvider({ children }: Props) {
  const [token, setToken] = useState('')
  const [userId, setUserId] = useState('')

  const registerToken = (receivedToken: string) => {
    setToken(receivedToken)
    localStorage.setItem(TOKEN_KEY, receivedToken)
  }

  const deleteToken = () => {
    setToken('')
    setUserId('')
    localStorage.removeItem(TOKEN_KEY)
  }
  return (
    <AuthContext.Provider value={{ token, userId, registerToken, deleteToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
