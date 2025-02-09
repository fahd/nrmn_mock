import React from 'react'

interface QuestionContentType {
  avatar: string
  content: string
  first_name: string
  last_name: string
  post_id: number
  timestamp: string
  username: string
}

const QuestionContent: React.FC<QuestionContentType> = ({
  avatar,
  content,
  first_name,
  last_name,
  post_id,
  timestamp,
  username,
}) => {
  console.log('avatar', avatar)
  return (
    <div className="flex flex-col">
      <div className="flex">
        <img
          src={avatar}
          alt={username}
          className="rounded-full w-[50px] h-[50px] object-cover"
        />
        <div className="font-semibold ml-4">
          <div>
            {first_name} {last_name}
          </div>
        </div>
      </div>
      <div className="py-4">hi</div>
    </div>
  )
}

export default QuestionContent
