import { createStore } from 'redux'
import productsReducer from './productsApp'


const store = createStore(
  productsReducer
)

export default store
