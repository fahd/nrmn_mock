import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { NavUserType } from '../../typings/typings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faVideoCamera } from '@fortawesome/free-solid-svg-icons'

const ScheduleLink: React.FC = () => {
  return (
    <div className="hidden lg:block mx-3 text-navlink font-normal text-sm">
      <div className="flex items-center bg-schedule text-white px-4 py-1.5 rounded-sm">
        <FontAwesomeIcon icon={faVideoCamera} className="pr-2" />
        <div>Schedule a Video Call</div>
      </div>
    </div>
  )
}

const NavLink: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="hidden lg:block mx-3 text-navlink font-normal">{text}</div>
  )
}

const NavBadge: React.FC<{ badge: number }> = ({ badge }) => {
  return (
    <div>
      <div className="flex bg-link text-white items-center px-2 py-1 rounded-full text-xs">
        <FontAwesomeIcon icon={faGem} className="pr-1" />
        <div>{badge}</div>
      </div>
    </div>
  )
}

const NavMessages: React.FC = () => {
  return (
    <div className="px-2">
      <Link to="/messaging">
        <img src="/icons/message.svg" alt="See All Conversations" />
      </Link>
    </div>
  )
}

const NavUser: React.FC<NavUserType> = ({
  first_name,
  last_name,
  avatar,
  username,
  user_id,
}) => {
  return (
    <div className="cursor-pointer">
      <Link to={`/user/${user_id}`}>
        <div className="flex items-center pr-4">
          <img
            src={avatar}
            alt={username}
            className="rounded-full w-[20px] h-[20px] object-cover mx-2"
          />
          <div className="text-navlink font-normal">{first_name}</div>
        </div>
      </Link>
    </div>
  )
}

const Navbar = () => {
  const { user } = useAuth()

  return (
    <div className="py-5 px-4 bg-navbar flex space-between h-16">
      <div className="flex-1 flex justify-between">
        <div>
          <Link to="/">
            <img src="/icons/logo-light.png" alt="" />
          </Link>
        </div>
        <div className="flex items-center">
          <ScheduleLink />
          <NavMessages />
          <NavLink text={'Links'} />
          <NavLink text={'Help Articles'} />
          <NavLink text={'Submit a Ticket'} />
          <NavUser
            first_name={user.first_name}
            last_name={user.last_name}
            avatar={user.avatar}
            user_id={user.user_id}
            username={user.username}
          />
          <NavBadge badge={user.badge} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
