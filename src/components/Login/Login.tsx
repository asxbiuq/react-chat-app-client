import { Link } from 'react-router-dom'
import Store from '@/store/store'

export default () => {
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
          onChange={(event) => Store.setName(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="room"
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={(event) => Store.setRoom(event.target.value)}
        />
      </div>

      <Link className="flex justify-center" to={`/chat`}>
        <button className="btn btn-active btn-info btn-wide" type="submit">
          确认
        </button>
      </Link>
    </div>
  )
}
