import { createStore, applyMiddleware } from 'redux';

const rootReducer = (state = {}, action) => {
  return state
}

export default function configureStore(initialState={}) {
 return createStore(rootReducer);
}
