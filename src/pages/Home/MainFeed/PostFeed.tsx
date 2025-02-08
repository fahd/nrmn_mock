import React from 'react'
import { formatDate } from '../../../utils/formatDate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

interface PostType {
  post_id: number
  user_id: number
  username: string
  first_name: string
  last_name: string
  avatar: string
  content: string
  timestamp: string
  likes: Set<number>
  user: UserType
}

interface UserType {
  user_id: number
  username: string
  first_name: string
  last_name: string
  email: string
  avatar: string
  role: string
}

// Fix: Define PostFeed Props Correctly
interface PostFeedProps {
  posts: PostType[]
  user: UserType
}

const Reply = ({
  post_parent_id,
  reply_id,
  user_id,
  username,
  first_name,
  last_name,
  avatar,
  content,
  timestamp,
  likes,
}) => {
  return (
    <div className="flex">
      <img
        src={avatar}
        alt={username}
        className="rounded-full w-[30px] h-[30px] object-cover"
      />
      <div className="ml-2 flex flex-col">
        <div className="text-link font-semibold">
          {first_name} {last_name}
        </div>
        <p
          className="pb-4 text-md"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

const Post: React.FC<PostType> = ({
  post_id,
  user_id,
  username,
  first_name,
  last_name,
  avatar,
  content,
  timestamp,
  likes,
  user,
  replies,
}) => {
  const renderPostReplies = () => {
    return replies.map((reply, idx) => {
      return <Reply key={reply.reply_id} {...reply} />
    })
  }

  const hasReplies = replies.length > 0

  return (
    <div className="bg-white pt-4 px-6  my-6 rounded-md border border-gray-200 align-center">
      <div className="flex">
        <img
          src={avatar}
          alt={username}
          className="rounded-full w-[50px] h-[50px] object-cover"
        />

        <div className="flex ml-2 flex-col">
          <div className="font-semibold text-link">
            {first_name} {last_name}
          </div>
          <div className="font-normal text-gray-400">
            {formatDate(timestamp)}
          </div>
        </div>
      </div>
      <p
        className="py-4 text-md"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="flex flex-end justify-end pt-4 pb-4 pr-4">
        <div className="flex items-center"></div>
        <div className="font-semibold text-gray-600 flex items-center p-2  cursor-pointer text-link">
          <div className="mr-2">Answer {first_name}'s question</div>
          <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
        </div>
      </div>
      {hasReplies && <hr className="border-t border-gray-200" />}
      {hasReplies && <div className="py-4">{renderPostReplies()}</div>}
    </div>
  )
}

const PostFeed: React.FC<PostFeedProps> = ({ posts, user }) => {
  const renderPosts = () => {
    const postIds = Object.keys(posts).map(Number)
    const lastIndex = postIds.length - 1
    return postIds.map((_, i) => {
      const postId = postIds[lastIndex - i]
      return <Post key={postId} {...posts[postId]} />
    })
  }
  return <div>{renderPosts()}</div>
}

export default PostFeed
