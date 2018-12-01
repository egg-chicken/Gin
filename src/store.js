import { createStore } from 'redux';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
  case "CHANGE_PAGE":
    return { ...state, currentPage: action.to }
  case "INVITE_CHARACTER":
    const characters = state.characters.concat(action.character)
    return { ...state, characters: characters, currentPage: 'Home' }
  default:
    return state
  }
}

export default function configureStore(initialState={}) {
  return createStore(rootReducer, initialState);
}
