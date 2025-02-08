import React, { createContext, useState, useEffect, ReactNode } from 'react'
import mock_db from '../mocks/mock_db'

interface Post {
  post_id: number
  user_id: number
  username: string
  first_name: string
  last_name: string
  avatar: string
  content: string
  timestamp: string
}

interface PostContextType {
  posts: Post[]
  addPost: (newPost: Post) => void
}

export const PostContext = createContext<PostContextType | null>(null)

export const PostProvider = ({ children }: { children: ReactNode }) => {
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
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  )
}
