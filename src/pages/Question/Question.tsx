import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../../hooks/useData'
import { useAuth } from '../../hooks/useAuth'
import QuestionContent from './QuestionContent'
import QuestionAnswers from './QuestionAnswers'

const Question = () => {
  const { id } = useParams()
  const { posts } = useData()
  const { user } = useAuth()
  const postId = Number(id)
  const question = posts[postId]
  const replies = question.replies

  return (
    <div className="flex-1">
      {/* top */}
      <QuestionContent {...question} />
      {/* bottom */}
      <QuestionAnswers user={user} replies={question.replies} />
    </div>
  )
}

export default Question
