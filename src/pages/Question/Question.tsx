import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePosts } from '../../hooks/usePosts'
import QuestionContent from './QuestionContent'
import QuestionAnswers from './QuestionAnswers'

const Question = () => {
  const { id } = useParams()
  const { posts } = usePosts()
  const postId = Number(id)
  const question = posts[postId]
  const replies = question.replies

  return (
    <div className="flex-1">
      {/* top */}
      <QuestionContent {...question} />
      {/* bottom */}
      <QuestionAnswers replies={question.replies} />
    </div>
  )
}

export default Question
