import React, { useState, useRef, useContext } from 'react'
import { QuestionAnswerType } from '../../typings/typings'
import { CreateMessage } from '../../components/CreateContent/CreateContent'
import { isContentEmpty } from '../../utils'

const QuestionAnswers: React.FC<QuestionAnswerType> = ({ replies, user }) => {
  const [replyContent, setReplyContent] = useState('')
  const contentRef = useRef<HTMLDivElement>(null)

  const onCreateReply = () => {
    console.log('reply', replyContent)
  }

  const hasContentWritten = !isContentEmpty(replyContent)

  return (
    <div className="py-8 m-auto max-w-4xl p-4">
      <div className="flex items-center">
        <div className="bg-white flex-1 border-sm mx-2">
          <CreateMessage
            onChange={setReplyContent}
            contentRef={contentRef}
            type="post"
            placeholder={'Reply to this post'}
          />
        </div>
      </div>
      <div className="flex flex-1 justify-end mt-4 items-center">
        <img
          src={user.avatar}
          alt={user.username}
          className="rounded-full w-[30px] h-[30px] object-cover"
        />
        <button
          onClick={onCreateReply}
          disabled={!hasContentWritten}
          className={`ml-2 px-4 py-1 rounded-full transition font-semibold ${
            hasContentWritten
              ? 'bg-submit text-white cursor-pointer'
              : 'bg-gray-200 text-gray-500'
          }`}
        >
          Post
        </button>
      </div>
    </div>
  )
}

export default QuestionAnswers
