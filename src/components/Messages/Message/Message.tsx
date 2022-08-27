import React from 'react'
import { observer } from 'mobx-react-lite'
import MessageAvatar from './MessageAvatar'

interface Props {
  message: Message
  name: string
}
const Message = observer(({ message: { text, user }, name }: Props) => {
  let isSentByCurrentUser = false

  const trimmedName = name.trim().toLowerCase()

  if (user === trimmedName) {
    isSentByCurrentUser = true
  }

  return isSentByCurrentUser ? (
        <div className="flex gap-2 items-start flex-row-reverse">
          <MessageAvatar name={user}/> 
          <div className="card w-[20rem] bg-base-100 shadow-2xl bg-green-400 relative top-[1.5rem]">
            <div className="card-body p-5">
              <p className='font-medium'>{text}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 items-start">
          <MessageAvatar name={user}/> 
          
          <div className="card w-[20rem] bg-base-100 shadow-2xl bg-blue-400 relative top-[1.5rem]">
            <div className="card-body p-5">
              <p className='font-medium'>{text}</p>
            </div>
          </div>
        </div>
      )


})

export default Message
