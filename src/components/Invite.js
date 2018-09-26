import "./Invite.css"
import React from 'react'
import Slider from "react-slick"
import Page from './Page'
import InviteCharacter from './InviteCharacter'

export default ({onClick, characters}) => {
  return (
    <Page>
      <div className="InviteHeader">
        <h1>第一の御使い</h1>
      </div>
      <div className="InviteSlider">
        <Slider dots infinite speed={100} >
          { characters.map(c => <InviteCharacter key={c.id} character={c}  onClick={()=>onClick(c.id)}/> ) }
        </Slider>
      </div>
      <div className="InviteGuide">
        <p>キャラクターを選択してください</p>
      </div>
    </Page>
  )
}
