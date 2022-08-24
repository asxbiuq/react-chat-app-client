import Store from '@/store/store'
import io from 'socket.io-client'

class Socket {
  socket = io('ws://localhost:8080/', {})

  connect() {
    this.socket.on('connect', () => {
      console.log(`connect ${this.socket.id}`)

      this.socket.on('disconnect', () => {
        console.log(`disconnect`)
      })
    })
  }

  emitJoin(name: string, room: string) {
    this.socket.emit('join', { name, room }, (error: unknown) => {
      if (error) {
        console.log(`ERROR:${error}`)
      }

      console.log(`join : name: ${name},room: ${room}`)
    })
  }

  emitSendMessage(message: string) {
    this.socket.emit('sendMessage', message)
  }

  onMessage() {
    this.socket.on('message', (message) => {
      Store.addMessages(message)
      console.log(Store.getMessages())
    })
  }

  onRoomData() {
    this.socket.on('roomData', ({ users }) => {
      Store.setUsers(users)
      console.log(Store.getUsers())
    })
  }
}
const socket = new Socket()

export default socket
