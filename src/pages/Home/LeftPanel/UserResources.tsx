import React from 'react'
import { MemberAction } from '../../../components'

const UserResources = () => {
  // nav
  // body
  // left nav with actions
  // main feed
  // Connection requests on the side
  return (
    <ul className="bg-white rounded-md border-1 border-gray-200 list-none py-4">
      <MemberAction logo={'handshake'} title={'Connections'} />
      <MemberAction logo={'questioncircle'} title={'Ask a Mentor'} />
      <MemberAction logo={'certificate'} title={'MyMentor'} />
      <MemberAction logo={'laptop'} title={'Courses'} />
      <MemberAction logo={'briefcase'} title={'Jobs & Internships'} />
      <MemberAction logo={'book'} title={'Journals'} />
      <MemberAction logo={'users'} title={'Groups'} />
      <MemberAction logo={''} title={'My CV/Resume'} />
      <MemberAction logo={'producthunt'} title={'My Projects'} />
      <MemberAction logo={''} title={'My Publications'} />
      <MemberAction logo={''} title={'My Calendar'} />
      <MemberAction logo={''} title={'My Files'} />
      <MemberAction logo={'infocircle'} title={'Knowledgebase'} />
    </ul>
  )
}

export default UserResources
