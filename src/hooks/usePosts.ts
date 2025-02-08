import { useContext } from 'react'
import { PostContext } from '../contexts/PostContext'

export const usePosts = () => {
  const context = useContext(PostContext)
  if (!context) {
    throw new Error('useMessages must be used within a MessageProvider')
  }
  return context
}
