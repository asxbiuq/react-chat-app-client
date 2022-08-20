import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from '@/components/Login/Login'
import Chat from '@/components/Chat/Chat'
import LoginStore from '@/store/LoginStore'


const {name,room,setName,setRoom}=LoginStore

export default () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </>
  )
}
