import React from 'react'

interface MemberActionType {
  title: string
  url?: string
  logo?: string
}

const MemberAction: React.FC<MemberActionType> = ({ title, url, logo }) => {
  return (
    <li className="cursor-pointer py-2 px-4 text-link font-fakt hover:bg-gray-100 transition-all duration-200 ">
      {title}
    </li>
  )
}

export default MemberAction
