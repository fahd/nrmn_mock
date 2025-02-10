import React, { useState, useEffect } from 'react'
import LeftPanel from './LeftPanel/LeftPanel'
import MainFeed from './MainFeed/MainFeed'
import RightPanel from './RightPanel/RightPanel'
import { useAuth } from '../../hooks/useAuth'
import { useData } from '../../hooks/useData'

import { LoadingMainCard, LoadingSide } from '../../components/Loading/Loading'

const Home = () => {
  const { user } = useAuth()
  const { posts, replies, conversations, users } = useData()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      // simulated load
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex-1 ">
        <div className="m-auto max-w-7xl p-4">
          <div className="flex">
            <div className="hidden w-1/5 lg:block">
              <LoadingSide />
              <LoadingSide />
              <LoadingSide />
              <LoadingSide />
            </div>
            <div className="flex-1 sm:mx-1 md:mx-3 lg:mx-6">
              <LoadingMainCard />
              <LoadingMainCard />
              <LoadingMainCard />
              <LoadingMainCard />
              <LoadingMainCard />
            </div>
            <div className="w-1/4 hidden lg:block">
              <LoadingSide />
              <LoadingSide />
              <LoadingSide />
              <LoadingSide />
            </div>
          </div>
        </div>
      </div>
    )
  }

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
