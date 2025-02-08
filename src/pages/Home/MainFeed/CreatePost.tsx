import React, { useState, useRef, useContext } from 'react'
import { usePosts } from '../../../hooks/usePosts'

interface User {
  user_id: number
  username: string
  first_name: string
  last_name: string
  email?: string
  avatar: string
  role: string
}

interface CreatePostType {
  user: User
}

interface ModalProps {
  onClose: () => void
  user: User
}

const CreatePostModal: React.FC<ModalProps> = ({ onClose, user }) => {
  const [postContent, setPostContent] = useState('')
  const { posts, addPost } = usePosts()
  const contentRef = useRef<HTMLDivElement>(null)

  const isContentEmpty = (html: string) => {
    return html.replace(/<br>|<div>|<\/div>|&nbsp;/g, '').trim().length === 0
  }

  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    const element = event.currentTarget
    setPostContent(element.innerHTML)

    if (isContentEmpty(element.innerHTML)) {
      element.innerHTML = ''
    }

    element.style.height = 'auto'
    element.style.height = element.scrollHeight + 'px'
  }

  const onCreatePost = () => {
    const nextPostId = Object.keys(posts).length + 1

    const newPost = {
      ...user,
      post_id: nextPostId,
      content: postContent,
      timestamp: new Date().toISOString(),
    }
    addPost(newPost)
    onClose()
  }

  const hasContentWritten = !isContentEmpty(postContent)

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.6)]">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-[750px] min-h-[500px] flex flex-col mt-[-30vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 px-4 py-2 text-gray-500 hover:text-gray-700 transition cursor-pointer"
        >
          X
        </button>

        <div className="flex pt-2 pb-4">
          <div>
            <img
              src={user.avatar}
              alt={user.username}
              className="w-[50px] h-[50px] max-w-[50px] max-h-[50px] rounded-full"
            />
          </div>
          <div className="ml-4 font-semibold text-xl flex items-center">
            <span>
              {user.first_name} {user.last_name}
            </span>
          </div>
        </div>

        <div
          ref={contentRef}
          contentEditable
          onInput={handleInput}
          className="w-full p-2 focus:outline-none text-gray-700 placeholder resize-none overflow-hidden text-xl"
          style={{ minHeight: '40px', lineHeight: '1.5' }}
          placeholder="What's on your mind?"
        ></div>

        <div className="flex justify-end mt-auto">
          <button
            onClick={onCreatePost}
            disabled={!hasContentWritten}
            className={`px-4 py-1  rounded-full transition font-semibold ${
              hasContentWritten
                ? 'bg-submit text-white cursor-pointer'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

const CreatePost: React.FC<CreatePostType> = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex bg-white p-4 rounded-md border border-gray-200 align-center">
        <div className="pr-4 flex items-center">
          <img
            src={user.avatar}
            alt={user.username}
            className="w-[50px] h-[50px] max-w-[50px] max-h-[50px] rounded-full"
          />
        </div>
        <button
          className="flex-1 p-2 bg-white rounded-full border border-gray-300 flex hover:bg-gray-100 transition-all duration-200 cursor-pointer font-normal pl-4 items-center text-gray-500"
          onClick={() => setIsModalOpen(true)}
        >
          Share your thoughts, projects, ideas with the network
        </button>
      </div>

      {isModalOpen && (
        <CreatePostModal user={user} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}

export default CreatePost
