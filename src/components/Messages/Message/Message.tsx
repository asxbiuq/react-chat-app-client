import React from 'react'
import { observer } from 'mobx-react-lite'
import './Message.css'
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
        <div className="messageContainer justifyEnd">
            <div className="messageBox backgroundBlue">
              <p className="messageText colorWhite">{text}</p>
            </div>
          <p className="sentText pr-10">{trimmedName}</p>
        </div>
      ) : (
        <div className="messageContainer justifyStart">
          {/* <p className="sentText pl-10 ">{user}</p> */}
          <MessageAvatar name={user}/> 
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{text}</p>
          </div>
        </div>
      )


})

export default Message
