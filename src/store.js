import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  capItemListReducer,
  capItemDetailsReducer,
} from './reducers/capItemReducers'
import {
  teeItemListReducer,
  teeItemDetailsReducer,
} from './reducers/teeItemReducers'
import {
  tshirtItemListReducer,
  tshirtItemDetailsReducer,
} from './reducers/tshirtItemReducers'
import {
  knitwearItemListReducer,
  knitwearItemDetailsReducer,
} from './reducers/knitwearItemReducers'
import {
  footwearItemListReducer,
  footwearItemDetailsReducer,
} from './reducers/footwearItemReducers'
import {
  setItemListReducer,
  setItemDetailsReducer,
} from './reducers/setItemReducers'
import {
  shortItemListReducer,
  shortItemDetailsReducer,
} from './reducers/shortItemReducers'
import {
  hoodieItemListReducer,
  hoodieItemDetailsReducer,
} from './reducers/hoodieItemReducers'
import {
  pantItemListReducer,
  pantItemDetailsReducer,
} from './reducers/pantItemReducers'

const reducer = combineReducers({
  capList: capItemListReducer,
  capDetails: capItemDetailsReducer,
  teeList: teeItemListReducer,
  teeDetails: teeItemDetailsReducer,
  tshirtList: tshirtItemListReducer,
  tshirtDetails: tshirtItemDetailsReducer,
  knitwearList: knitwearItemListReducer,
  knitwearDetails: knitwearItemDetailsReducer,
  footwearList: footwearItemListReducer,
  footwearDetails: footwearItemDetailsReducer,
  setList: setItemListReducer,
  setDetails: setItemDetailsReducer,
  shortList: shortItemListReducer,
  shortDetails: shortItemDetailsReducer,
  hoodieList: hoodieItemListReducer,
  hoodieDetails: hoodieItemDetailsReducer,
  pantList: pantItemListReducer,
  pantDetails: pantItemDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
