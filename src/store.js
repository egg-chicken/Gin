import { createStore } from 'redux';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case "CHANGE_PAGE":
      return { ...state, currentPage: action.to }
    case "CHANGE_INVITE_CHARACTER":
      return { ...state, inviteCharacterId: (state.inviteCharacterId + 1) % 4 }
    default:
      return state
  }
}

export default function configureStore(initialState={}) {
 return createStore(rootReducer, initialState);
}
