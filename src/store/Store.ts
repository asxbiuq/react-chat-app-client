import { makeAutoObservable } from 'mobx'

class Store {
  name = ''
  room = ''
  users: User[] = []
  message = ''
  messages: Message[] = []

  constructor() {
    makeAutoObservable(this)
  }

  getName() {
    return this.name
  }
  setName(name: string) {
    this.name = name
  }

  getRoom() {
    return this.room
  }

  setRoom(room: string) {
    this.room = room
  }

  getUsers() {
    return this.users
  }

  setUsers(users: User[]) {
    this.users = users
  }

  getMessage() {
    return this.message
  }

  setMessage(message: string) {
    this.message = message
  }

  addMessages(message: Message) {
    this.messages.push(message)
  }
  getMessages() {
    return this.messages
  }

  setMessages(messages: []) {
    this.messages = messages
  }
}

const store = new Store()

export default store
