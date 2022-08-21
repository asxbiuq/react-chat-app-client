import { makeAutoObservable } from 'mobx'
import io from 'socket.io-client'

const ENDPOINT = 'https://project-chat-application.herokuapp.com/'

class Store {
  name = ''
  room = ''
  users = ''
  message = ''
  messages = ['']
  socket = io(ENDPOINT)

  constructor() {
    makeAutoObservable(this)
  }

  getName() {
    return this.name
  }
  setName(name: string) {
    this.name = name
    console.log(`name is change, now is ${name}`)
  }

  getRoom() {
    return this.room
  }

  setRoom(room: string) {
    this.room = room
    console.log(`name is change, now is ${room}`)
  }

  getUsers() {
    return this.users
  }

  setUsers(users: string) {
    this.users = users
  }

  getMessage() {
    return this.message
  }

  setMessage(message: string) {
    this.message = message
    console.log(`Message is change, now is ${this.message}`)
  }

  addMessages(message: string) {
    this.messages.push(message)
  }
  getMessages() {
    return this.messages
  }

  setMessages(messages: []) {
    this.messages = messages
  }

  sendMessage(message: string) {
    this.socket.emit('sendMessage', message)
  }

  socketEmit(event: string, cb: Function) {
    this.socket.emit(event, cb)
  }

  socketOn(event: string, cb: any) {
    this.socket.on(event, cb)
  }
}

const store = new Store()

export default store
