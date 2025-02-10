import React from 'react'
import { ConnectNetworkType, User } from '../../../typings/typings'
import { Link } from 'react-router-dom'
import { upperCase } from '../../../utils'

const ConnectUser: React.FC<{ user: User }> = ({ user }) => {
  const roleStyle =
    user.role === 'mentor' ? 'bg-link text-white' : 'bg-mentee text-mentee_text'
  return (
    <div>
      <div className="flex py-4 px-4 items-center">
        <div className="relative mr-3 flex">
          <div
            className={`absolute bottom-[-2px] left-0 right-0 flex justify-center items-center`}
          >
            <div className={`text-xs rounded-full py-0.5 px-1 ${roleStyle}`}>
              {upperCase(user.role)}
            </div>
          </div>

          <img
            src={user.avatar}
            alt={user.username}
            className="rounded-full w-[70px] h-[70px] object-cover"
          />
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-link font-semibold flex-1">
            {user.first_name} {user.last_name}
          </div>
          <div className="text-slate-400 text-sm">{user.university}</div>
          <div className="flex mt-2">
            <div className="text-slate-700 text-sm py-1 px-3 border-2 rounded-full border-slate-300 font-semibold hover:text-gray-800  hover:bg-gray-100 transition duration-200 ease-in-out">
              <Link to={`user/${user.user_id}`}>Connect</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ConnectNetwork: React.FC<ConnectNetworkType> = ({ users }) => {
  const renderNetwork = () => {
    return users.map((user, el) => {
      return <ConnectUser user={user} />
    })
  }
  return (
    <div className="my-2 bg-white border border-gray-200 py-4">
      <div className="flex flex-col">
        <div className="text-link font-semibold text-lg mb-2 px-6">Network</div>
        <div>{renderNetwork()}</div>
      </div>
    </div>
  )
}

export default ConnectNetwork
