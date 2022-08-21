import Store from '@/store/Store'
import { observer } from 'mobx-react-lite'
import { FormEvent, useEffect } from 'react'

const Input = observer(() => {
  const sendMessage = (event?: FormEvent | MouseEvent) => {
    if (event) {
      event.preventDefault()
    }

    if (Store.getMessage()) {
      Store.socket.emit('sendMessage', Store.getMessage())
      Store.setMessage('')
    }
  }

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="请输入消息"
        value={Store.message}
        onChange={(event) => {
          Store.setMessage(event.target.value)
        }}
        onKeyPress={(event) =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        发送
      </button>
    </form>
  )
})

export default Input
