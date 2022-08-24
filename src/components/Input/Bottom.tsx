import Store from '@/store/store'
import { observer } from 'mobx-react-lite'
import { FormEvent, KeyboardEventHandler } from 'react'
import socket from '@/api/socket'

interface GenericInput {
  getValue: Function
  onKeyPress: KeyboardEventHandler<HTMLInputElement>
}

const GenericInput = observer(({ getValue, onKeyPress }: GenericInput) => (
  <input
    className="input"
    type="text"
    placeholder="请输入消息"
    value={getValue()}
    onChange={(event) => {
      Store.setMessage(event.target.value)
    }}
    onKeyPress={onKeyPress}
  />
))

// interface Props {
//   message: string
// }

const Bottom = () => {
  const sendMessage = (event?: FormEvent | MouseEvent) => {
    if (event) {
      event.preventDefault()
    }
    const message = Store.getMessage()
    if (message) {
      socket.emitJoin(Store.name, Store.room)
      socket.emitSendMessage(message)
      Store.setMessage('')
    }
  }

  return (
    <form className="form">
      <GenericInput
        getValue={() => Store.message}
        onKeyPress={(event) =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        发送
      </button>
    </form>
  )
}

export default Bottom
