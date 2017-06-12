import { createStore } from 'redux';
import rootReducer from './redux/reducers/reducers';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState
  )
}