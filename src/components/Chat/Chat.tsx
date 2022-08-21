import React, { useCallback, useEffect } from 'react'
import TextContainer from '../TextContainer/TextContainer'
import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import Bottom from '../Input/Bottom'
import Store from '@/store/store'
import './Chat.css'
import socket from '@/api/socket'


const Chat = () => {




  useEffect(()=>{
    socket.connect()
    socket.emitJoin(Store.name, Store.room)
  },[Store.name,Store.room])

  useEffect(()=>{
    socket.onMessage()
    socket.onRoomData()
  },[])

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={Store.room} />
        <Messages messages={Store.messages} name={Store.name} />
        <Bottom message={Store.message} />
      </div>
      <TextContainer users={Store.users} />
    </div>
  )
}

export default Chat
