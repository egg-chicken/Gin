import "./Sprite.css"
import React from 'react'

export default class Sprite extends React.Component {
  state = { currentFrame: 0 }

  componentDidMount() {
    const id = window.setInterval(() => {
      const nextFrame = (this.state.currentFrame + 1) % 48
      this.setState({currentFrame: nextFrame})
    }, 100)
    this.setState({intervalId: id})
  }

  componentWillUnmount() {
    window.clearInterval(this.state.intervalId)
  }

  render () {
    const {character} = this.props
    const frameClass = `SpriteFrame${this.state.currentFrame}`

    return (
      <div className="SpriteContainer">
        <img className={frameClass} src={character.sprite.src}/>
      </div>
    )
  }
}
