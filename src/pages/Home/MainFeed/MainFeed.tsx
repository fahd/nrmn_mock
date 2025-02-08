import React from 'react'
import CreatePost from './CreatePost'
import PostFeed from './PostFeed'
import { useAuth } from '../../../hooks/useAuth'
import { usePosts } from '../../../hooks/usePosts'

const MainFeed = () => {
  const { user } = useAuth()
  const { posts } = usePosts()

  return (
    <div className="flex-1 mx-6">
      <CreatePost user={user} />
      <PostFeed posts={posts} />
    </div>
  )
}

export default MainFeed
