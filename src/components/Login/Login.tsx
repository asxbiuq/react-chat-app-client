import { useState } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import LoginStore from '@/store/LoginStore'



export default observer(() => {

  return (
    <div className="form-control w-full max-w-xs gap-2">
      <label className="label justify-center">
        <span className="label-text">登陆页</span>
      </label>
      <div>
        <input
          type="text"
          placeholder="name"
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={(event) => LoginStore.setName(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="room"
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={(event) => LoginStore.setRoom(event.target.value)}
        />
      </div>

      <Link
        className="flex justify-center"
        onClick={(e) => (!LoginStore.name || !LoginStore.room ? e.preventDefault() : null)}
        to={`/chat?name=${LoginStore.name}&room=${LoginStore.room}`}
      >
        <button className="btn btn-active btn-info btn-wide" type="submit">
          确认
        </button>
      </Link>
    </div>
  )
})