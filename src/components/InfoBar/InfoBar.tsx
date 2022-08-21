import React from 'react'
import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'
import { observer } from 'mobx-react-lite'
import './InfoBar.css'

interface Props {
  room:string
}

const InfoBar = observer(({ room }:Props) => {
  return(
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
  )
})

export default InfoBar
