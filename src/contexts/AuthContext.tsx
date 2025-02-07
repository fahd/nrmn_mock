import { createContext, useState, ReactNode } from 'react'
import authUser from '../mocks/authUser.json'

interface User {
  user_id: number
  username: string
  email: string
  avatar: string
}

interface AuthContextType {
  user: User
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user] = useState<User>(authUser)
  console.log('user', user)

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
