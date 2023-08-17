import {
  TEEITEMS_LIST_REQUEST,
  TEEITEMS_LIST_SUCCESS,
  TEEITEMS_LIST_FAIL,
  TEEITEMS_DETAILS_REQUEST,
  TEEITEMS_DETAILS_SUCCESS,
  TEEITEMS_DETAILS_FAIL,
} from '../constants/teeConstants'

export const teeItemListReducer = (state = { teeItems: [] }, action) => {
  switch (action.type) {
    case TEEITEMS_LIST_REQUEST:
      return { loading: true, teeItems: [] }
    case TEEITEMS_LIST_SUCCESS:
      return { loading: false, teeItems: action.payload }
    case TEEITEMS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const teeItemDetailsReducer = (state = { teeItem: {} }, action) => {
  switch (action.type) {
    case TEEITEMS_DETAILS_REQUEST:
      return { loading: true, ...state }
    case TEEITEMS_DETAILS_SUCCESS:
      return { loading: false, teeItem: action.payload }
    case TEEITEMS_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
