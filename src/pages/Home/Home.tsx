import React from 'react'
import LeftPanel from './LeftPanel/LeftPanel'
import MainFeed from './MainFeed/MainFeed'
import RightPanel from './RightPanel/RightPanel'
import { useAuth } from '../../hooks/useAuth'
import { useData } from '../../hooks/useData'

const Home = () => {
  const { user } = useAuth()
  const { posts, replies, conversations, users } = useData()
  return (
    <div className="flex-1 ">
      <div className="m-auto max-w-7xl p-4">
        <div className="flex">
          <LeftPanel />
          <MainFeed posts={posts} replies={replies} user={user} />
          <RightPanel conversations={conversations} users={users} user={user} />
        </div>
      </div>
    </div>
  )
}

export default Home
