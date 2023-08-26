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
import { newArrivalItemDetailsReducer } from './reducers/newArrivalItemReducers'
import { cartReducer } from './reducers/cartReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers'

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
  newArrivalDetails: newArrivalItemDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
