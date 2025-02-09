import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../../hooks/useData'
import { useAuth } from '../../hooks/useAuth'
import QuestionContent from './QuestionContent'
import QuestionAnswers from './QuestionAnswers'

const Question = () => {
  const { id } = useParams()
  const { posts, replies, addReply, likeReply } = useData()
  const { user } = useAuth()
  const postId = Number(id)
  const question = posts[postId]

  return (
    <div className="flex-1">
      <QuestionContent {...question} />
      <QuestionAnswers
        user={user}
        replies={replies[postId]}
        addReply={addReply}
        post_id={postId}
        likeReply={likeReply}
      />
    </div>
  )
}

export default Question
