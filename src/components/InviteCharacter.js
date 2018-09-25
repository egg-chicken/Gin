import "./Invite.css"
import React from 'react'

export default ({character}) => {
  return (
    <div className="InviteCharacterContainer">
      <img className="InviteCharacterImage"
           src={character.image.src}
           alt={character.name}/>
    </div>
  )
}
