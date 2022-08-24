import { observer } from 'mobx-react-lite'
import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message/Message'
import './Messages.css'

interface Props {
  messages: Message[]
  name: string
}

const Messages = observer(({ messages, name }: Props) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
))

export default Messages
