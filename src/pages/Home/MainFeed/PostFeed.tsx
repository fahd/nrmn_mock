import React from 'react'
import { useData } from '../../../hooks/useData'
import { Link } from 'react-router-dom'
import { formatDate } from '../../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import {
  PostType,
  UserType,
  ReplyType,
  PostFeedProps,
} from '../../../typings/typings'
import { Reply } from '../../../components/Content/Content'

const Post: React.FC<PostType> = ({
  post_id,
  user_id,
  username,
  first_name,
  last_name,
  avatar,
  content,
  timestamp,
  user,
}) => {
  const { replies, likeReply } = useData()

  const postReplies = replies[post_id]

  const renderPostReplies = () => {
    return postReplies.map((reply, idx) => {
      return (
        <Reply
          me={user.user_id}
          key={reply.reply_id}
          style="py-1"
          fontSize="text-md"
          likeReply={likeReply}
          {...reply}
        />
      )
    })
  }

  const hasReplies = Boolean(postReplies)

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
          <Link to={`/question/${post_id}`} className="mr-2">
            Answer {first_name}'s question
          </Link>
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
      return <Post key={postId} {...posts[postId]} user={user} />
    })
  }
  return <div>{renderPosts()}</div>
}

export default PostFeed
