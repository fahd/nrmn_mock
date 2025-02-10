import React, { createContext, useState, useEffect, ReactNode } from 'react'
import mock_db from '../mocks/mock_db'
import { ReplyType, PostType, DataContextType } from '../typings/typings'

export const DataContext = createContext<DataContextType | null>(null)

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const loadData = () => {
    const storedData = localStorage.getItem('data')
    return storedData ? JSON.parse(storedData) : mock_db
  }

  const [data, setData] = useState<Record<string, PostType>>(loadData())

  const addPost = (newPost: PostType) => {
    setData((prevData) => {
      const storedData = localStorage.getItem('data')
      const updatedPosts = { ...prevData.posts, [newPost.post_id]: newPost }
      const updatedData = {
        ...prevData,
        posts: updatedPosts,
      }
      localStorage.setItem('data', JSON.stringify(updatedData))
      return updatedData
    })
  }

  const addReply = (
    post_id: number,
    is_new_post: boolean,
    new_reply?: React.RefObject<HTMLDivElement>
  ) => {
    // need to initialize new reply in mock replies data to map to new post
    if (is_new_post) {
      setData((prevData) => {
        const storedData = localStorage.getItem('data')
        const updatedReplies = { ...prevData.replies, [post_id]: null }
        const updatedData = {
          ...prevData,
          replies: updatedReplies,
        }
        localStorage.setItem('data', JSON.stringify(updatedData))
        return updatedData
      })
    }
    // when we actually are saving a new reply
    else {
      const nextReplyId = data.totalReplies + 1
      const { user_id, username, first_name, last_name, avatar, role } =
        data.auth_user
      const newReply = {
        post_id: post_id,
        reply_id: nextReplyId,
        user_id: user_id,
        username: username,
        first_name: first_name,
        last_name: last_name,
        avatar: avatar,
        role: role,
        content: new_reply,
        timestamp: new Date().toISOString(),
        likes: {},
      }

      setData((prevData) => {
        const prevReplies = prevData.replies[post_id]
        let updatedReplies

        if (!Boolean(prevReplies)) {
          updatedReplies = [newReply]
        } else {
          updatedReplies = [...prevReplies, newReply]
        }

        const updatedData = {
          ...prevData,
          replies: { ...prevData.replies, [post_id]: updatedReplies },
          totalReplies: data.totalReplies + 1,
        }
        localStorage.setItem('data', JSON.stringify(updatedData))
        return updatedData
      })
    }
  }

  const likeReply = (post_id: number, reply_id: number, user_id: number) => {
    setData((prevData) => {
      const updatedReplies = [...prevData.replies[post_id]]
      const findIdx = updatedReplies.findIndex((r) => r.reply_id === reply_id)
      const updatedReply = { ...updatedReplies[findIdx] }
      const updatedLikes = { ...updatedReply.likes }

      if (updatedLikes[user_id]) {
        delete updatedLikes[user_id]
      } else {
        updatedLikes[user_id] = true
      }

      updatedReply.likes = updatedLikes
      updatedReplies[findIdx] = updatedReply

      const updatedData = {
        ...prevData,
        replies: {
          ...prevData.replies,
          [post_id]: updatedReplies,
        },
      }

      localStorage.setItem('data', JSON.stringify(updatedData))

      return updatedData
    })
  }

  const addConversationMessage = (
    conversation_id: string,
    content: React.RefObject<HTMLDivElement>,
    user_id: number
  ) => {
    setData((prevData) => {
      const timestamp = new Date().toISOString()
      const updatedConversation = {
        ...prevData.conversations[conversation_id],
        messages: [
          ...prevData.conversations[conversation_id].messages, // Copy previous messages
          { content, timestamp, user_id }, // Add new message
        ],
        last_message: { content, timestamp, user_id }, // Update last message
      }

      // Create the new state
      const updatedData = {
        ...prevData,
        conversations: {
          ...prevData.conversations,
          [conversation_id]: updatedConversation,
        },
      }

      localStorage.setItem('data', JSON.stringify(updatedData))

      return updatedData
    })
  }

  const getConversations = () => {
    const latestConversations = Object.values(data.conversations).sort(
      (a, b) =>
        new Date(b.last_message.timestamp).getTime() -
        new Date(a.last_message.timestamp).getTime()
    )

    return latestConversations
  }

  return (
    <DataContext.Provider
      value={{
        posts: data.posts,
        replies: data.replies,
        users: data.users,
        conversations: getConversations(),
        addConversationMessage,
        addPost,
        addReply,
        likeReply,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
