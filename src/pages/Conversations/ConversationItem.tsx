import React from 'react'
import { ConversationItemType } from '../../typings/typings'
import { formatDate } from '../../utils'
const ConversationItem: React.FC<ConversationItemType> = ({
  user,
  conversation,
  onChangeConversation,
  activeConversationId,
}) => {
  return (
    <div
      key={conversation.conversation_id}
      className={`p-2 lg:p-4 cursor-pointer ${
        conversation.conversation_id === activeConversationId
          ? 'bg-blue-100'
          : 'hover:bg-gray-100'
      }`}
      onClick={() => onChangeConversation(conversation.conversation_id)}
    >
      <div className="flex justify-center lg:justify-start">
        <div className="flex truncate">
          <img
            className="rounded-full w-[60px] h-[60px] object-cover mr-0 md:mr-2 lg:mr-3"
            src={user.avatar}
            alt={user.username}
          />

          <div className="hidden lg:block">
            <div>
              <p className="font-semibold text-slate-700">
                {user.first_name} {user.last_name}
              </p>
              <div className="text-slate-500 text-xs">
                {formatDate(conversation.last_message.timestamp)}
              </div>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: conversation.last_message.content,
              }}
              className="text-gray-600 text-sm truncate"
            ></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConversationItem
