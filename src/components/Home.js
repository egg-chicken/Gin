import React from 'react'
import Page from './Page'

export default ({characters}) => {
  const character = characters[0]
  return (
    <Page>
      welcome, {character.name}
    </Page>
  )
}
