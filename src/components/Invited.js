import "./Invite.css"
import React from 'react'
import Page from './Page'
import Character from '../models/Character'

export default ({onClick, characterId}) => {
  const character = Character.create(characterId)
  return (
    <Page>
      <div className="PageHeader">
        {character.name} が仲間に加わりました
      </div>
    </Page>
  )
}
