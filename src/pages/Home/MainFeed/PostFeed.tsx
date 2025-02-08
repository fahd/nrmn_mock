import React from 'react'

interface Post {
  message_id: number
  user_id: number
  username: string
  first_name: string
  last_name: string
  avatar: string
  content: string
  timestamp: string
  likes: Set<number>
}

const Post = () => {
  return (
    <div className="bg-white p-4 my-2 rounded-md border border-gray-200 align-center">
      {Math.floor(Math.random() * 1000)}
    </div>
  )
}

const PostFeed = () => {
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default PostFeed
