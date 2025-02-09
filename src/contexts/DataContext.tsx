import React, { createContext, useState, useEffect, ReactNode } from 'react'
import mock_db from '../mocks/mock_db'

interface ReplyType {
  avatar: string
  content: string
  first_name: string
  last_name: string
  likes: Set<number>
  post_parent_id: number
  reply_id: number
  role: number
  timestamp: string
  user_id: number
  username: string
}

interface Post {
  post_id: number
  user_id: number
  username: string
  first_name: string
  last_name: string
  avatar: string
  content: string
  timestamp: string
  replies: ReplyType
}

interface DataContextType {
  posts: Post[]
  addPost: (newPost: Post) => void
}

export const DataContext = createContext<DataContextType | null>(null)

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const loadPosts = () => {
    const storedPosts = localStorage.getItem('posts')
    return storedPosts ? JSON.parse(storedPosts) : mock_db.posts
  }

  const [posts, setPosts] = useState<Record<string, Post>>(loadPosts())

  const addPost = (newPost: Post) => {
    setPosts((prevPosts) => {
      const updatedPosts = { ...prevPosts, [newPost.post_id]: newPost }
      localStorage.setItem('posts', JSON.stringify(updatedPosts))
      return updatedPosts
    })
  }

  return (
    <DataContext.Provider value={{ posts, addPost }}>
      {children}
    </DataContext.Provider>
  )
}
