import React from 'react'
import { RightPanelFeed } from '../../../typings/typings'
import RecentChats from './RecentChats'

const RightPanel: React.FC<RightPanelFeed> = ({ conversations, users }) => {
  return (
    <div className="w-1/5">
      <RecentChats conversations={conversations} users={users} />
    </div>
  )
}

export default RightPanel
