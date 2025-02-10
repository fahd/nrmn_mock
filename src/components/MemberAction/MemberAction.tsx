import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHandshake,
  faQuestionCircle,
  faBriefcase,
  faCertificate,
  faLaptop,
  faBook,
  faUsers,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons'

// Mapping logo names to Font Awesome icons
const iconMap: Record<string, any> = {
  handshake: faHandshake,
  questioncircle: faQuestionCircle,
  certificate: faCertificate,
  laptop: faLaptop,
  briefcase: faBriefcase,
  book: faBook,
  users: faUsers,
  producthunt: faProductHunt, // This is from the "brands" set
  infocircle: faInfoCircle,
}

interface MemberActionType {
  title: string
  url?: string
  logo?: string
}

const MemberAction: React.FC<MemberActionType> = ({ title, url, logo }) => {
  return (
    <li className="py-2 px-4 text-link font-fakt hover:bg-gray-100 transition-all duration-200 ">
      {logo && iconMap[logo] && (
        <FontAwesomeIcon
          icon={iconMap[logo]}
          className="w-4 h-4 text-gray-500 text-link mr-2"
        />
      )}
      <span>{title}</span>
    </li>
  )
}

export default MemberAction
