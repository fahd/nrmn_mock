import React, { useRef, useEffect } from 'react'
import { ActiveConversationType, Message } from '../../typings/typings'
import { Link } from 'react-router-dom'
import { formatDate, formatDateToTime } from '../../utils'
import { CreateMessage } from '../../components/Content/Content'

const ConversationMessage: React.FC<Message> = ({
  user_id,
  content,
  timestamp,
  user,
}) => {
  const { avatar, username, first_name, last_name } = user
  return (
    <div className="py-4">
      <div className="flex">
        <img
          src={avatar}
          alt={username}
          className="rounded-full w-[40px] h-[40px] object-cover"
        />

        <div className="flex ml-2 flex-col">
          <div>
            <div className="flex font-semibold text-link items-center">
              <Link to={`/user/${user_id}`}>
                {first_name} {last_name}
              </Link>
              <div className="font-normal text-gray-400 text-xs text-slate-500">
                <span className="px-1">•</span>
                {formatDateToTime(timestamp)}
              </div>
            </div>
            <div className="font-normal text-gray-400 text-xs text-slate-500">
              {formatDate(timestamp)}
            </div>
          </div>
          <div
            className="py-2 text-slate-700 text-md lg:text-lg"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  )
}

const ActiveConversation: React.FC<ActiveConversationType> = ({
  conversation,
  users,
  setMessageContent,
  onEnterSubmit,
  contentRef,
}) => {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [conversation.messages])

  const renderConversationMessages = () => {
    return conversation.messages.map((conversation) => {
      return (
        <ConversationMessage
          {...conversation}
          user={users[conversation.user_id]}
          key={conversation.timestamp}
        />
      )
    })
  }

  return (
    <div>
      <div className="p-4">
        {renderConversationMessages()}
        <div ref={bottomRef} />
      </div>
      <div className="sticky bottom-0 bg-white px-2 py-4">
        <div className="border-1 rounded-md border-gray-200 pl-2">
          <CreateMessage
            onEnterSubmit={onEnterSubmit}
            placeholder={'Enter a new message here'}
            onChange={setMessageContent}
            contentRef={contentRef}
            type="conversation"
          />
        </div>
      </div>
    </div>
  )
}

export default ActiveConversation
