import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from '@/components/Login/Login'
import Chat from '@/components/Chat/Chat'
import Menu from './components/Menu';

export default () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="chat" element={<Chat />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
    </>
  )
}
