export function changePage(to) {
  return {
    type: "CHANGE_PAGE",
    to: to
  }
}

export function selectInviteCharacter(characterId) {
  return {
    type: "SELECT_INVITE_CHARACTER",
    id: characterId
  }
}
