import React from 'react'
import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'
import { observer } from 'mobx-react-lite'
import './InfoBar.css'

interface Props {
  room: string
}

const InfoBar = ({ room }: Props) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        {/* <a href="/">
          <img src={closeIcon} alt="close icon" />
        </a> */}
        <button className="btn btn-circle btn-outline hover:bg-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  )
}

export default InfoBar
