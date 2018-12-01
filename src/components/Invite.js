import "./Invite.css"
import React from 'react'
import Slider from "react-slick"
import Page from './Page'
import Character from './invite/Character'
import Button from '@material-ui/core/Button'


export default class Invite extends React.Component {
  state = { index: 0 }

  handleSwipe = (index) => {
    this.setState({index: index})
  }

  render () {
    const {onClick, characters} = this.props

    return (
      <Page>
        <div className="InviteSlider">
          <Slider dots infinite speed={300} afterChange={this.handleSwipe}>
            { characters.map(c => <Character key={c.id} character={c} /> ) }
          </Slider>
        </div>

        <div className="InviteGuide">
          <Button color="inherit"
                  variant="outlined"
                  style={{borderColor: "#fff", fontFamily: "Sawarabi Mincho"}}
                  onClick={() => onClick(characters[this.state.index].id)} >
            このキャラクターで始める
          </Button>
        </div>
      </Page>
    )
  }
}
