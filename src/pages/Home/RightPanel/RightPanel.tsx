import React, { useMemo } from 'react'
import { RightPanelFeed } from '../../../typings/typings'
import RecentChats from './RecentChats'
import ConnectNetwork from './ConnectNetwork'

const RightPanel: React.FC<RightPanelFeed> = ({
  conversations,
  users,
  user,
}) => {
  const me = user.user_id
  const filteredUsers = useMemo(() => {
    return Object.values(users)
      .filter((user) => user.user_id !== me) // Exclude the logged-in user
      .slice(0, 5)
  }, [users, me])
  return (
    <div className="w-1/4">
      <RecentChats conversations={conversations} users={users} />
      <ConnectNetwork users={filteredUsers} />
    </div>
  )
}

export default RightPanel
