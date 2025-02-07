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
      <MemberAction title={'Connections'} />
      <MemberAction title={'Ask a Mentor'} />
      <MemberAction title={'MyMentor'} />
      <MemberAction title={'Courses'} />
      <MemberAction title={'Jobs & Internships'} />
      <MemberAction title={'Journals'} />
      <MemberAction title={'Groups'} />
      <MemberAction title={'My CV/Resume'} />
      <MemberAction title={'My Projects'} />
      <MemberAction title={'My Publications'} />
      <MemberAction title={'My Calendar'} />
      <MemberAction title={'My Files'} />
      <MemberAction title={'Knowledgebase'} />
    </ul>
  )
}

export default UserResources
