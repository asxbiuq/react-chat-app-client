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
  <TextArea
    placeholder="请输入消息"
    onKeyPress={onKeyPress}
    value={Store.getMessage()}
    onChange={(event) => {
      Store.setMessage(event.target.value)
    }}
    autoSize={{ minRows: 1, maxRows: 6 }}
  />

))

// interface Props {
//   message: string
// }

const Bottom = () => {

  const sendMessage = (event: KeyboardEvent) => {
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
    <form className="form flex justify-between">
      <div className='flex-auto'>
        <GenericInput
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className='flex-none'>
        <Button type="primary" onClick={(e) => sendMessage(e)}>
          <Icon icon="bi:send-fill" />
        </Button>
      </div>
    </form>
  )
}

export default Bottom
