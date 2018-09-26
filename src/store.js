import { createStore } from 'redux';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
  case "CHANGE_PAGE":
    return { ...state, currentPage: action.to }
  case "SELECT_INVITE_CHARACTER":
    return { ...state, inviteCharacterId: action.characterId }
  default:
    return state
  }
}

export default function configureStore(initialState={}) {
  return createStore(rootReducer, initialState);
}
