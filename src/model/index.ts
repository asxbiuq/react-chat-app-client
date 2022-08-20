import { types } from "mobx-state-tree"

// Define a couple models
export const Author = types.model({
    id: types.identifier,
    firstName: types.string,
    lastName: types.string
})
export const Tweet = types.model({
    id: types.identifier,
    author: types.reference(Author), // stores just the `id` reference!
    body: types.string,
    timestamp: types.number
})

// Define a store just like a model
export const RootStore = types.model({
    authors: types.array(Author),
    tweets: types.array(Tweet)
})

export const name = types.model({
  authors: types.array(Author),
  tweets: types.array(Tweet)
})