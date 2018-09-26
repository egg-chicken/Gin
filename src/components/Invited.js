import "./Invite.css"
import React from 'react'
import Page from './Page'
import Character from '../models/Character'


export default ({onClick, characterId}) => {
  const character = Character.create(characterId)
  return (
    <Page>
      <div>
        なにかパラメータ的なものが出る
      </div>
    </Page>
  )
}
