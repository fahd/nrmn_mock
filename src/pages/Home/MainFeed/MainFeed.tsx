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
      {/* "user" was included in case we wanted to handle direct answering to the question on the main page, rather than the separate question page */}
      <PostFeed user={user} posts={posts} />
    </div>
  )
}

export default MainFeed
