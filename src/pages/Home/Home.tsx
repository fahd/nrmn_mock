import React from 'react'
import LeftPanel from './LeftPanel/LeftPanel'
import MainFeed from './MainFeed/MainFeed'
import RightPanel from './RightPanel/RightPanel'

const Home = () => {
  // nav
  // body
  // left nav with actions
  // main feed
  // Connection requests on the side
  return (
    <div className="flex-1 ">
      <div className="m-auto max-w-7xl p-4">
        <div className="flex">
          <LeftPanel />
          <MainFeed />
          <RightPanel />
        </div>
      </div>
    </div>
  )
}

export default Home
