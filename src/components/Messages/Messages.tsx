import { observer } from 'mobx-react-lite'
import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message/Message'


interface Props {
  messages: Message[]
  name: string
}

const isSameDay = () => {
  
}

const Messages = observer(({ messages, name }: Props) => (
  <ScrollToBottom className="messages flex h-full p-4">
    {messages.map((message, i) => (
      <div key={i} className="mb-[2rem]">
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
))

export default Messages
