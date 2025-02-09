import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePosts } from '../../hooks/usePosts'
import QuestionContent from './QuestionContent'
// import QuestionAnswers from '.QuestionAnswers'

const Question = () => {
  const { id } = useParams()
  const { posts } = usePosts()
  const postId = Number(id)

  const question = posts[postId]

  console.log('questions', question)

  return (
    <div className="flex-1">
      <div className="m-auto max-w-4xl p-4">
        {/* top */}
        <QuestionContent {...question} />
        {/* bottom */}
        {/* <QuestionAnswers /> */}
      </div>
    </div>
  )
}

export default Question
