import Store from '@/store/store'
import { observer } from 'mobx-react-lite'
import { FormEvent, KeyboardEvent, KeyboardEventHandler } from 'react'
import socket from '@/api/socket'
import { Button, Tooltip } from 'antd';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
interface GenericInput {
  onKeyPress: KeyboardEventHandler
}
const { TextArea } = Input;

const GenericInput = observer(({ onKeyPress }: GenericInput) => (
  // <input
  //   className=""
  //   type="text"
  //   placeholder="请输入消息"
  //   value={getValue()}
  //   onChange={(event) => {
  //     Store.setMessage(event.target.value)
  //   }}
  //   onKeyPress={onKeyPress}
  // />
  // <TextArea
  //   placeholder="请输入消息"
  //   onKeyPress={onKeyPress}
  //   value={Store.getMessage()}
  //   onChange={(event) => {
  //     Store.setMessage(event.target.value)
  //   }}
  //   autoSize={{ minRows: 1, maxRows: 6 }}
  // />
  <textarea 
    className="textarea leading-4 w-full bg-slate-300" 
    placeholder="请输入消息" 
    value={Store.getMessage()}
    onKeyPress={onKeyPress}
    onChange={(e)=>Store.setMessage(e.target.value)}
  />

))

// interface Props {
//   message: string
// }

const Bottom = () => {

  const sendMessage = (event: any) => {
    const message = Store.getMessage()
    if (message) {
      socket.emitJoin(Store.name, Store.room)
      socket.emitSendMessage(message)
      console.log(`send message success, message: ${message}`)
      Store.setMessage('')
    }
  }

  const handleKeyPress = (event:KeyboardEvent) =>{
    event.key === 'Enter' ? sendMessage(event) : null
  }

  return (
    <form className="form flex justify-between relative items-center">
      <div className='flex-auto flex'>
        <GenericInput
          onKeyPress={handleKeyPress}
        />
      </div>
      {/* <textarea 
        className="textarea textarea-info flex-auto leading-4" 
        placeholder="请输入消息" 
        onKeyPress={handleKeyPress}
        onChange={(e)=>Store.setMessage(e.target.value)}
      /> */}
      <div className='flex-none'>
        <button className="btn" type='button' onClick={(e) => sendMessage(e)}>
          <Icon icon="bi:send-fill" />
        </button>
      </div>
    </form>
  )
}

export default Bottom
