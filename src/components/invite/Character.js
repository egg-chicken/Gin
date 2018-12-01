import "./Character.css"
import React from 'react'
import Sprite from '../Sprite'

export default ({character, onClick}) => {
  return (
    <div className="InviteCharacterContainer" onClick={onClick}>
      <div className="PageHeader">
        <h1>{character.title} {character.name}</h1>
      </div>
      <img className="InviteCharacterImage"
           src={character.image.src}
           alt={character.name}/>
      <Sprite character={character}/>
      <div className="InviteCharacterParams">
        <div className="InviteCharacterLV">Lv. {character.level}</div>
        <div className="InviteCharacterAbility">{character.ability}</div>
      </div>
    </div>
  )
}
