import React, { useState, useRef } from 'react'
import { QuestionAnswerType } from '../../typings/typings'
import { CreateMessage, Reply } from '../../components/Content/Content'
import { isContentEmpty } from '../../utils'

const QuestionAnswers: React.FC<QuestionAnswerType> = ({
  replies,
  user,
  addReply,
  post_id,
  likeReply,
}) => {
  const [replyContent, setReplyContent] = useState('')
  const contentRef = useRef<HTMLDivElement>(null)

  const renderReplies = () => {
    const replyIds = Object.keys(replies).map(Number)
    const lastIndex = replyIds.length - 1
    return replyIds.map((_, idx) => {
      const replyId = replyIds[lastIndex - idx]

      return (
        <Reply
          {...replies[replyId]}
          style="p-4 my-4 border-1 border-gray-200"
          fontSize="text-md"
          key={replyId}
          me={user.user_id}
          likeReply={likeReply}
        />
      )
    })
  }

  const onCreateReply = () => {
    addReply(post_id, false, replyContent)
    setReplyContent('')
    if (contentRef.current) {
      contentRef.current.innerHTML = ''
    }
  }

  const hasContentWritten = !isContentEmpty(replyContent)

  const hasReplies = Boolean(replies)

  return (
    <div className="py-8 m-auto max-w-3xl p-4">
      <div>
        <div className="flex items-center">
          <div className="bg-white flex-1 border-sm">
            <CreateMessage
              onChange={setReplyContent}
              contentRef={contentRef}
              type="post"
              placeholder={'Reply to this post'}
              styles="border-gray-200 border-1"
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
      <div>{hasReplies && renderReplies()}</div>
    </div>
  )
}

export default QuestionAnswers
