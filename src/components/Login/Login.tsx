import { useNavigate } from 'react-router-dom'
import Store from '@/store/store'
import { Button, Checkbox, Form, Input } from 'antd'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Modal from '../Modal'

export default () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/chat', { replace: true })
  }

  return (
      <Modal>
        <div className='grid place-content-center gap-4'>
          <input type="text" placeholder="用户名" className="input w-full max-w-xs input-bordered bg-gray-100" onChange={(e)=>Store.setName(e.target.value)}/>
          <input type="text" placeholder="房间号" className="input w-full max-w-xs input-bordered bg-gray-100" onChange={(e)=>Store.setRoom(e.target.value)}/>
          <button className="btn btn-info" onClick={handleClick}>进入</button>
        </div>
      </Modal>
  )
}
