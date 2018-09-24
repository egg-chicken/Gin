import { createStore, applyMiddleware } from 'redux';

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case "CHANGE_PAGE":
      return { ...state, currentPage: action.to }
    default:
      return state
  }
}

export default function configureStore(initialState={}) {
 return createStore(rootReducer, initialState);
}
