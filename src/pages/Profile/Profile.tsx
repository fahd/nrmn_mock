import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../../hooks/useData'
import { upperCase } from '../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
  const { id } = useParams()
  const { users } = useData()
  const profileId = Number(id)
  const user = users[profileId]

  const {
    user_id,
    university,
    title,
    city,
    state,
    badge,
    username,
    first_name,
    last_name,
    email,
    avatar,
    role,
    about,
    areas_of_focus,
  } = user

  return (
    <div className="flex-1">
      <div className="m-auto max-w-3xl p-4">
        <div className="flex py-4">
          <div>
            <div className="relative">
              <div className="absolute bottom-2 left-0 right-0 flex justify-center items-center">
                <div className="flex  bg-link text-white items-center px-2 py-1 rounded-full text-xs">
                  <FontAwesomeIcon icon={faGem} className="pr-1" />
                  <div>{badge}</div>
                </div>
              </div>
              <img
                src={avatar}
                alt={username}
                className="w-[120px] h-[120px] object-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex pl-8 flex-col">
            <h1 className="text-2xl font-semibold pb-1">
              {first_name} {last_name},{' '}
              <small className="text-gray-500 font-normal text-xl">
                {upperCase(role)}
              </small>
            </h1>
            <div className="text-gray-600 text-lg">{university}</div>

            <div className="text-gray-600 text-md">
              {city}, {state}
            </div>
            <div className="flex mt-2">
              {areas_of_focus.map((area, idx) => (
                <div className="font-semibold text-sm text-slate-500">
                  {area}
                  <span className="px-1.5">
                    {idx !== areas_of_focus.length - 1 && '•'}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex my-2 text-slate-700 py-1">
              <div className="py-1 px-3 border-1 rounded-full border-slate-300 font-semibold mr-2">
                Connect
              </div>
              {role === 'mentor' && (
                <div className="py-1 px-3 border-1 rounded-full border-slate-300 font-semibold mr-2">
                  Request Mentoring
                </div>
              )}
              <div className="py-1 px-3 border-1 rounded-full border-slate-300 font-semibold mr-2">
                Ask me a question
              </div>
            </div>
          </div>
        </div>

        <div className="py-4">
          <div className="py-3 text-xs font-semibold text-slate-700">ABOUT</div>
          <p
            className={`pb-1 text-slate-700 text-md`}
            dangerouslySetInnerHTML={{ __html: about }}
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
