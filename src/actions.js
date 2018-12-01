export function changePage(to) {
  return {
    type: "CHANGE_PAGE",
    to: to
  }
}

export function inviteCharacter(character) {
  return {
    type: "INVITE_CHARACTER",
    character: character
  }
}
