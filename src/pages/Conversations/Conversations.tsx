import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../../hooks/useData'
import { useAuth } from '../../hooks/useAuth'

const Conversations = () => {
  const { id } = useParams()
  // const { posts, replies, addReply, likeReply } = useData()
  // const { user } = useAuth()
  // const postId = Number(id)
  // const question = posts[postId]

  return (
    <div className="flex-1">
      {/* Left Choose Pane */}
      {/* Right Active Conversation */}
      here
    </div>
  )
}

export default Conversations
