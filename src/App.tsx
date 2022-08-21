import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from '@/components/Login/Login'
import Chat from '@/components/Chat/Chat'
import Store from '@/store/Store'

const { name, room, setName, setRoom } = Store

export default () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="chat" element={<Chat />} />
      </Routes>
    </>
  )
}
