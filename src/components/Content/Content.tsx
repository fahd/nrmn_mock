import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { CreateMessageType, ReplyType } from '../../typings/typings'
import { isContentEmpty } from '../../utils'

export const Reply: React.FC<ReplyType> = ({
  post_id,
  reply_id,
  user_id,
  username,
  first_name,
  last_name,
  avatar,
  content,
  timestamp,
  style,
  fontSize,
  likes,
  me,
  likeReply,
}) => {
  const onLikeReply = () => {
    likeReply(post_id, reply_id, me)
  }
  const likesCount = Object.keys(likes).length
  const hasLiked = likes.hasOwnProperty(me)
  const imgUrl = hasLiked
    ? '/public/icons/upvote-colored.svg'
    : '/public/icons/upvote.svg'

  return (
    <div className={`flex bg-white ${style ? style : ''}`}>
      <img
        src={avatar}
        alt={username}
        className="rounded-full w-[30px] h-[30px] object-cover"
      />
      <div className="ml-2 mb-2 flex flex-col">
        <div className="text-link font-semibold">
          <Link to={`/user/${user_id}`}>
            {first_name} {last_name}
          </Link>
        </div>
        <p
          className={`pb-1 text-slate-700 ${fontSize}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div
          className={`flex items-center cursor-pointer`}
          onClick={onLikeReply}
        >
          <div
            className={`py-1 pr-2 flex rounded-md border-gray-200 text-gray-600 font-semibold text-sm flex items-center ${
              hasLiked && 'text-link'
            }`}
          >
            <div className="flex items-center">
              <img className="max-w-[10px]" src={imgUrl} />
            </div>
            <div className={`ml-2 `}>Helpful ({likesCount})</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const CreateMessage: React.FC<CreateMessageType> = ({
  contentRef,
  onChange,
  placeholder,
  styles,
  onEnterSubmit,
}) => {
  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    const element = event.currentTarget
    onChange(element.innerHTML)

    if (isContentEmpty(element.innerHTML)) {
      element.innerHTML = ''
    }

    element.style.height = 'auto'
    element.style.height = element.scrollHeight + 'px'
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      if (onEnterSubmit) {
        onEnterSubmit()
      }
    }
  }

  return (
    <div
      ref={contentRef}
      contentEditable
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      className={`
        w-full 
        p-2 
        focus:outline-none 
        text-gray-700 
        placeholder 
        resize-none 
        overflow-hidden 
        text-xl 
        border-gray-200
        ${styles}
      `}
      style={{ minHeight: '40px', lineHeight: '1.5' }}
      placeholder={placeholder}
    ></div>
  )
}
