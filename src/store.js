import { createStore } from 'redux';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
  case "CHANGE_PAGE":
    return { ...state, currentPage: action.to }
  case "INVITE_CHARACTER":
    return { ...state, inviteCharacterId: action.characterId, currentPage: 'Invited' }
  default:
    return state
  }
}

export default function configureStore(initialState={}) {
  return createStore(rootReducer, initialState);
}
