export function changePage(to) {
  return {
    type: "CHANGE_PAGE",
    to: to
  }
}

export function changeInviteCharacter(id) {
  return {
    type: "CHANGE_INVITE_CHARACTER",
    id: id
  }
}
