import React, { useCallback, useEffect } from 'react'
import TextContainer from '../TextContainer/TextContainer'
import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import Bottom from '../Input/Bottom'
import Store from '@/store/store'
import './Chat.css'
import socket from '@/api/socket'

const Chat = () => {
  useEffect(() => {
    socket.connect()
    socket.emitJoin(Store.name, Store.room)
    socket.onMessage()
    socket.onRoomData()
  }, [Store.name, Store.room])

  return (
      <div className='flex flex-col justify-between'>
        <div className='fixed w-full top-0'>
          <InfoBar room={Store.room}/>
        </div>
        <div className='h-[85vh] overflow-hidden relative top-[10vh]'>
          <Messages messages={Store.messages} name={Store.name} />
        </div>
        <div className='fixed w-full bottom-0'>
          <Bottom />
        </div>
      </div> 
  )
}

export default Chat
