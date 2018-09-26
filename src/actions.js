export function changePage(to) {
  return {
    type: "CHANGE_PAGE",
    to: to
  }
}

export function inviteCharacter(characterId) {
  return {
    type: "INVITE_CHARACTER",
    characterId: characterId
  }
}
