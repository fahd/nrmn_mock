import React from 'react'
import { CreatePost } from '../../../components'
import { useAuth } from '../../../hooks/useAuth'

const MainFeed = () => {
  const { user } = useAuth()
  // nav
  // body
  // left nav with actions
  // main feed
  // Connection requests on the side
  return (
    <div className="flex-1 mx-6">
      <CreatePost user={user} />
    </div>
  )
}

export default MainFeed
