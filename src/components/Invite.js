import "./Invite.css"
import React from 'react'
import Slider from "react-slick"
import Page from './Page'
import InviteCharacter from './InviteCharacter'
import Button from '@material-ui/core/Button'

let currentIndex = 0

const handleSwipe = (direction) => {
  if(direction === "left") {
    currentIndex = (currentIndex + 1) % 4
  } else{
    currentIndex = (currentIndex === 0) ? 3 : currentIndex - 1
  }
}

export default ({onClick, characters}) => {
  return (
    <Page>
      <div className="InviteHeader">
        <h1>第一の御使い</h1>
      </div>

      <div className="InviteSlider">
        <Slider dots infinite speed={300} onSwipe={handleSwipe}>
          { characters.map(c => <InviteCharacter key={c.id}
                                                 character={c}
                                                 onClick={()=>onClick(c.id)}/> ) }
        </Slider>
      </div>

      <div className="InviteGuide">
        <Button color="inherit"
                variant="outlined"
                style={{borderColor: "#fff"}}
                onClick={() => onClick(characters[currentIndex].id)} >
          このキャラクターで始める
        </Button>
      </div>
    </Page>
  )
}
