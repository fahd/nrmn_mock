import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useData } from '../../hooks/useData'
import { useAuth } from '../../hooks/useAuth'
import ConversationItem from './ConversationItem'
import ActiveConversation from './ActiveConversation'

const Conversations = () => {
  const { conversations, users, addConversationMessage } = useData()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const activeConversationId = searchParams.get('conversation')
  const [messageContent, setMessageContent] = useState('')
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!activeConversationId) {
      navigate(`?conversation=${conversations[0].conversation_id}`, {
        replace: true,
      })
    }
  }, [activeConversationId, navigate])

  const onClearRef = () => {
    setMessageContent('')
    if (contentRef.current) {
      contentRef.current.innerHTML = ''
    }
  }

  const onChangeConversation = (conversation_id: string) => {
    navigate(`?conversation=${conversation_id}`)
    onClearRef()
  }

  const getActiveConversation = () => {
    return conversations.find(
      (conversation) => conversation.conversation_id === activeConversationId
    )
  }
  const onEnterSubmit = () => {
    addConversationMessage(activeConversationId, messageContent, user.user_id)
    onClearRef()
  }

  return (
    <div className="flex flex-1 h-[calc(100vh-4rem)]">
      <div className="w-1/4 border-r border-gray-200 overflow-y-auto">
        {Object.values(conversations).map((conversation) => {
          const conv_user = users[conversation.participant]
          return (
            <ConversationItem
              user={conv_user}
              key={conversation.conversation_id}
              conversation={conversation}
              onChangeConversation={onChangeConversation}
              activeConversationId={activeConversationId}
            />
          )
        })}
      </div>

      <div className="w-3/4 overflow-y-auto">
        {activeConversationId && (
          <ActiveConversation
            conversation={getActiveConversation()}
            setMessageContent={setMessageContent}
            onEnterSubmit={onEnterSubmit}
            me={user}
            users={users}
            contentRef={contentRef}
          />
        )}
      </div>
    </div>
  )
}

export default Conversations
