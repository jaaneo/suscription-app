import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'

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
  const [token, setToken] = useState<string>()
  const [userId, setUserId] = useState<string>('')

  const initToken = useCallback((newToken: string) => {
    setToken(newToken)
    if (newToken) {
      const decoded = jwtDecode<{ sub: string }>(newToken)
      console.log(decoded)
      setUserId(decoded.sub)
    }
  }, [])

  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY)
    initToken(storedToken || '')
  }, [initToken])

  const registerToken = useCallback((receivedToken: string) => {
    localStorage.setItem(TOKEN_KEY, receivedToken)
    initToken(receivedToken)
  }, [initToken])

  const deleteToken = useCallback(() => {
    setToken('')
    setUserId('')
    localStorage.removeItem(TOKEN_KEY)
  }, [])

  if (token === undefined) return null

  return (
    <AuthContext.Provider value={{
      token: token as string,
      userId,
      registerToken,
      deleteToken }}>
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
