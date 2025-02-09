import React, { useState, useRef, useContext } from 'react'
import { useData } from '../../../hooks/useData'
import { isContentEmpty } from '../../../utils'
import { ModalProps, CreatePostType, User } from '../../../typings/typings'
import { CreateMessage } from '../../../components/CreateContent/CreateContent'

const CreatePostModal: React.FC<ModalProps> = ({ onClose, user }) => {
  const [postContent, setPostContent] = useState('')
  const { posts, addPost } = useData()

  const contentRef = useRef<HTMLDivElement>(null)

  const onCreatePost = () => {
    const nextPostId = Object.keys(posts).length + 1

    const newPost = {
      ...user,
      post_id: nextPostId,
      content: postContent,
      timestamp: new Date().toISOString(),
      replies: [],
      likes: {},
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
          className="absolute top-3 right-3 px-4 py-2 text-gray-500 hover:text-gray-700 transition cursor-pointer"
        >
          <img
            src="/public/icons/close.svg"
            alt="close modal"
            className="w-[15px] h-[15px]"
          />
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

        <CreateMessage
          onChange={setPostContent}
          onSubmit={onCreatePost}
          contentRef={contentRef}
          type="post"
          placeholder={"What's on your mind?"}
        />

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
