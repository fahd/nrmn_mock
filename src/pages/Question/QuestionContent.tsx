import React from 'react'
import { upperCase, formatDate } from '../../utils'
import { QuestionContentType } from '../../typings/typings'
import { Link } from 'react-router-dom'

const QuestionContent: React.FC<QuestionContentType> = ({
  avatar,
  content,
  first_name,
  last_name,
  post_id,
  timestamp,
  username,
  role,
  user_id,
}) => {
  return (
    <div className="bg-white">
      <div className="m-auto max-w-3xl p-4">
        <div className="flex flex-col flex-1">
          <div className="flex">
            <img
              src={avatar}
              alt={username}
              className="rounded-full w-[55px] h-[55px] object-cover"
            />
            <div className=" ml-4">
              <div className="font-semibold text-link">
                <Link to={`/user/${user_id}`}>
                  {first_name} {last_name}
                </Link>
              </div>
              <div className="text-gray-400 text-sm">{upperCase(role)}</div>
              <div className="text-gray-400 text-xs">
                {formatDate(timestamp)}
              </div>
            </div>
          </div>
          <div className="py-12 flex items-center flex-1">
            <p
              className="pb-4 text-xl text-slate-700"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionContent
