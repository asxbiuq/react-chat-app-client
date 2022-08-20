import { makeAutoObservable } from "mobx"

class Login {
    name = ''
    room = ''

    constructor() {
        makeAutoObservable(this)
    }

    setName(name:string){
      this.name = name
      console.log(`name is change, now is ${name}`)
    }

    setRoom(room:string){
      this.room = room
      console.log(`name is change, now is ${room}`)
    }
}

const LoginStore = new Login()

export default LoginStore