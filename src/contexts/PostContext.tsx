import React, { createContext, useState, ReactNode } from 'react'
import posts from '../mocks/posts.json'

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
  Posts: Post[]
  addPost: (newPost: Post) => void
}

export const PostContext = createContext<PostContextType | null>(null)

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [Posts, setPosts] = useState<Post[]>([])

  const addPost = (newPost: Post) => {
    setPosts((prevPosts) => [newPost, ...prevPosts])
  }

  return (
    <PostContext.Provider value={{ Posts, addPost }}>
      {children}
    </PostContext.Provider>
  )
}
