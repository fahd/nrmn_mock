import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useMessages must be used within a MessageProvider')
  }
  return context
}
