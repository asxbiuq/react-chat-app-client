import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import TextContainer from '../TextContainer/TextContainer'
import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Store from '@/store/Store'
import './Chat.css'
import { observer } from 'mobx-react-lite'

const ENDPOINT = 'https://project-chat-application.herokuapp.com/'

const Chat = observer(() => {
  const room = Store.getRoom()
  const name = Store.getName()
  const socket = io(ENDPOINT)

  socket.emit('join', { name, room }, (error: unknown) => {
    if (error) {
      alert(error)
    }
  })

  socket.on('message', (message: string) => {
    Store.addMessages(message)
  })

  socket.on('roomData', ({ users }) => {
    Store.setUsers(users)
  })

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={Store.messages} name={name} />
        <Input />
      </div>
      <TextContainer users={Store.users} />
    </div>
  )
})

export default Chat
