import React from 'react'
import { Link } from 'react-router-dom'
import { RecentChatsType, Conversation } from '../../../typings/typings'

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
            className="rounded-full w-[25px] h-[25px] mr-3"
            src={user.avatar}
            alt={user.username}
          />

          <div>
            <div>
              <p className="font-semibold">
                {user.first_name} {user.last_name}
              </p>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: last_message.content,
              }}
              className="text-gray-600 text-sm truncate"
            ></p>
          </div>
        </div>
      </Link>
    </div>
  )
}

const RecentChats: React.FC<RecentChatsType> = ({ conversations, users }) => {
  const renderChats = () => {
    return conversations.map((conversation) => {
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
        Recent Chats
      </div>
      <div>{renderChats()}</div>
    </div>
  )
}

export default RecentChats
