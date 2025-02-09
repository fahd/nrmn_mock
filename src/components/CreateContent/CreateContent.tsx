import React, { useRef } from 'react'
import { CreateMessageType } from '../../typings/typings'
import { isContentEmpty } from '../../utils'

export const CreateMessage: React.FC<CreateMessageType> = ({
  contentRef,
  onChange,
  placeholder,
  type,
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
  return (
    <div
      ref={contentRef}
      contentEditable
      onInput={handleInput}
      className="w-full p-2 focus:outline-none text-gray-700 placeholder
      resize-none overflow-hidden text-xl"
      style={{ minHeight: '40px', lineHeight: '1.5' }}
      placeholder={placeholder}
    ></div>
  )
}
