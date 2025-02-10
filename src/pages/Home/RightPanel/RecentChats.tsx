import React from 'react'
import { Link } from 'react-router-dom'
import { RecentChatsType, Conversation } from '../../../typings/typings'
import { upperCase, formatDateToTime, formatDateMonthDay } from '../../../utils'

const Chat: React.FC<Conversation> = ({
  last_message,
  conversation_id,
  user,
}) => {
  return (
    <div className="hover:bg-gray-100 py-2 px-4">
      <Link to={`/messaging/?conversation=${conversation_id}`}>
        <div className="flex truncate justify-start">
          <img
            className="rounded-full w-[25px] h-[25px] mr-3 mt-[5px]"
            src={user.avatar}
            alt={user.username}
          />

          <div>
            <div>
              <p className="font-normal text-link">
                {user.first_name} {user.last_name},{' '}
                <span className="text-sm text-slate-400">
                  {upperCase(user.role)}
                </span>
              </p>
              <div className="text-xs text-slate-300">
                <span>{formatDateMonthDay(last_message.timestamp)}</span>
                <span className="px-1">•</span>
                <span>{formatDateToTime(last_message.timestamp)}</span>
              </div>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: last_message.content,
              }}
              className="text-gray-600 text-sm truncate pt-1"
            ></p>
          </div>
        </div>
      </Link>
    </div>
  )
}

const RecentChats: React.FC<RecentChatsType> = ({ conversations, users }) => {
  const renderChats = () => {
    return conversations.slice(0, 5).map((conversation) => {
      return (
        <Chat
          {...conversation}
          user={users[conversation.participant]}
          key={conversation.conversation_id}
        />
      )
    })
  }
  return (
    <div className="bg-white border border-gray-200 py-4">
      <div className="text-link font-semibold text-lg mb-2 px-6">
        My Connections
      </div>
      <div>{renderChats()}</div>
      <div className="pt-2 text-link text-md px-6 font-semibold">
        <Link to="/messaging">View More</Link>
      </div>
    </div>
  )
}

export default RecentChats
