import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { capItemListReducer } from './reducers/capItemReducers'
import { teeItemListReducer } from './reducers/teeItemReducers'
import { tshirtItemListReducer } from './reducers/tshirtItemReducers'
import { knitwearItemListReducer } from './reducers/knitwearItemReducers'
import { footwearItemListReducer } from './reducers/footwearItemReducers'
import { setItemListReducer } from './reducers/setItemReducers'
import { shortItemListReducer } from './reducers/shortItemReducers'
import { hoodieItemListReducer } from './reducers/hoodieItemReducers'
import { pantItemListReducer } from './reducers/pantItemReducers'

const reducer = combineReducers({
  capList: capItemListReducer,
  teeList: teeItemListReducer,
  tshirtList: tshirtItemListReducer,
  knitwearList: knitwearItemListReducer,
  footwearList: footwearItemListReducer,
  setList: setItemListReducer,
  shortList: shortItemListReducer,
  hoodieList: hoodieItemListReducer,
  pantList: pantItemListReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
