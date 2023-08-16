import {
  SHORTITEMS_LIST_REQUEST,
  SHORTITEMS_LIST_SUCCESS,
  SHORTITEMS_LIST_FAIL,
} from '../constants/shortConstants'

export const shortItemListReducer = (state = { shortItems: [] }, action) => {
  switch (action.type) {
    case SHORTITEMS_LIST_REQUEST:
      return { loading: true, shortItems: [] }
    case SHORTITEMS_LIST_SUCCESS:
      return { loading: false, shortItems: action.payload }
    case SHORTITEMS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
