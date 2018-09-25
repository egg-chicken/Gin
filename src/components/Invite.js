import "./Invite.css"
import React from 'react'
import Slider from "react-slick"
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
      <div className="InviteSlider">
        <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
          { characters.map(c => <InviteCharacter key={c.id} character={c}/> ) }
        </Slider>
      </div>
    </Page>
  )
}
