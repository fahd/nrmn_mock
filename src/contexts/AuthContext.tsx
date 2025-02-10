import { createContext, useState, ReactNode } from 'react'
import mock_db from '../mocks/mock_db'

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
  const [authUser] = useState<User>(mock_db.auth_user)

  return (
    <AuthContext.Provider value={{ user: authUser }}>
      {children}
    </AuthContext.Provider>
  )
}
