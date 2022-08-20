import {Author,Tweet,RootStore} from '@/model'
import {makeObservable} from 'mobx'
// Instantiate a couple model instances
const jamon = Author.create({
  id: "jamon",
  firstName: "Jamon",
  lastName: "Holmgren"
})

const tweet = Tweet.create({
  id: "1",
  author: jamon.id, // just the ID needed here
  body: "Hello world!",
  timestamp: Date.now()
})

// Now instantiate the store!
const rootStore = RootStore.create({
  authors: [jamon],
  tweets: makeObservable([tweet])
})


