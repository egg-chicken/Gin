import "./Invite.css"
import React from 'react'
import Page from './Page'
import InviteCharacter from './InviteCharacter'

export default ({onClick, characterId, characters}) => {
    const character = characters[characterId]
    return (
        <Page onClick={onClick}>
            <div className="InviteHeader">
                <h1>第一の御使い</h1>
                <p>キャラクターを選んでください</p>
            </div>
            <div>
                {characters.map(c => <InviteCharacter key={c.id} character={c} enter={c === character}/> )}
            </div>
        </Page>
    )
}
