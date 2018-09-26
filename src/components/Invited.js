import "./Invite.css"
import React from 'react'
import Page from './Page'

export default ({onClick, character}) => {
  return (
    <Page>
      <div className="InviteHeader">
        <h1>キャラクターが加入しました</h1>
      </div>
    </Page>
  )
}
