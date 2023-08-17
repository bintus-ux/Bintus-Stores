import {
  SETITEMS_LIST_REQUEST,
  SETITEMS_LIST_SUCCESS,
  SETITEMS_LIST_FAIL,
  SETITEMS_DETAILS_SUCCESS,
  SETITEMS_DETAILS_REQUEST,
  SETITEMS_DETAILS_FAIL,
} from '../constants/setConstants'

export const setItemListReducer = (state = { setItems: [] }, action) => {
  switch (action.type) {
    case SETITEMS_LIST_REQUEST:
      return { loading: true, setItems: [] }
    case SETITEMS_LIST_SUCCESS:
      return { loading: false, setItems: action.payload }
    case SETITEMS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const setItemDetailsReducer = (state = { setItem: {} }, action) => {
  switch (action.type) {
    case SETITEMS_DETAILS_REQUEST:
      return { loading: true, ...state }
    case SETITEMS_DETAILS_SUCCESS:
      return { loading: false, setItem: action.payload }
    case SETITEMS_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
