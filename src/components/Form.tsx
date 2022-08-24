import { FormEvent, MouseEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Store from '@/store/store'
interface Props {
  name: string
  room: string
  handleClick: MouseEventHandler<HTMLButtonElement>
}

export default (props: any) => {
  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault()

    navigate('/chat', { replace: true })
  }
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <form>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputEmail2"
            className="form-label inline-block mb-2 text-gray-700"
          >
            用户名
          </label>
          <input
            type="text"
            className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="用户名"
            onChange={(event) => Store.setName(event.target.value)}
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputPassword2"
            className="form-label inline-block mb-2 text-gray-700"
          >
            房间号
          </label>
          <input
            type="text"
            className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputPassword2"
            placeholder="房间号"
            onChange={(event) => Store.setRoom(event.target.value)}
          />
        </div>
        <button
          className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
          onClick={handleSubmit}
        >
          进入
        </button>
      </form>
    </div>
  )
}
