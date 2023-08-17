import {
  PANTITEMS_LIST_REQUEST,
  PANTITEMS_LIST_SUCCESS,
  PANTITEMS_LIST_FAIL,
  PANTITEMS_DETAILS_REQUEST,
  PANTITEMS_DETAILS_SUCCESS,
  PANTITEMS_DETAILS_FAIL,
} from '../constants/pantConstants'

export const pantItemListReducer = (state = { pantItems: [] }, action) => {
  switch (action.type) {
    case PANTITEMS_LIST_REQUEST:
      return { loading: true, pantItems: [] }
    case PANTITEMS_LIST_SUCCESS:
      return { loading: false, pantItems: action.payload }
    case PANTITEMS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const pantItemDetailsReducer = (state = { pantItem: {} }, action) => {
  switch (action.type) {
    case PANTITEMS_DETAILS_REQUEST:
      return { loading: true, ...state }
    case PANTITEMS_DETAILS_SUCCESS:
      return { loading: false, pantItem: action.payload }
    case PANTITEMS_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
