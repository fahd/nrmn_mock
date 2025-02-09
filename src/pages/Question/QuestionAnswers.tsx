import React from 'react'

interface ReplyType {
  avatar: string
  content: string
  first_name: string
  last_name: string
  likes: Set<number>
  post_parent_id: number
  reply_id: number
  role: number
  timestamp: string
  user_id: number
  username: string
}

interface Replies {
  replies: ReplyType
}

const QuestionAnswers: React.FC<Replies> = ({ replies }) => {
  console.log('replies', replies)
  return <div className="py-8 m-auto max-w-4xl p-4"></div>
}

export default QuestionAnswers
