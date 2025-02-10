import React, { useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import PostFeed from './PostFeed'
import { MainFeedType } from '../../../typings/typings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const MainFeed: React.FC<MainFeedType> = ({ user, posts, replies }) => {
  return (
    <div className="flex-1 mx-6">
      <CreatePost user={user} />
      <PostFeed user={user} posts={posts} />
    </div>
  )
}

export default MainFeed
