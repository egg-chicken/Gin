import "./Invite.css"
import React from 'react'
import Page from './Page'
import Character from '../models/Character'

export default ({onClick, characterId}) => {
    const character = Character.create(characterId)
    return (
      <Page>
        <div className="InviteHeader">
          <h1>第一の御使い</h1>
          <p>キャラクターを選んでください</p>
        </div>
        <div className="InviteCharacterContainer">
          <img className="InviteCharacterImage" src={character.getFullBodyImageUrl()}/>
        </div>
      </Page>
    );
}
