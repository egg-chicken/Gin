import "./Invite.css"
import React from 'react'

export default ({character, onClick}) => {
  return (
    <div className="InviteCharacterContainer" onClick={onClick}>
      <img className="InviteCharacterImage"
           src={character.image.src}
           alt={character.name}/>
    </div>
  )
}
