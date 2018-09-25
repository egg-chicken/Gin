import "./Invite.css"
import React from 'react'
import { Slide } from '@material-ui/core'

export default ({character, enter}) => {
  const direction = enter ? "left" : "right"
  return (
    <Slide in={enter} direction={direction} unmountOnExit>
      <div className="InviteCharacterContainer">
        <img className="InviteCharacterImage"
             src={character.image.src}
             alt={character.name}/>
        {enter}
      </div>
    </Slide>
  )
}
