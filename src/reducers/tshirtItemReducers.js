import {
  TSHIRTITEMS_LIST_REQUEST,
  TSHIRTITEMS_LIST_SUCCESS,
  TSHIRTITEMS_LIST_FAIL,
  TSHIRTITEMS_DETAILS_REQUEST,
  TSHIRTITEMS_DETAILS_SUCCESS,
  TSHIRTITEMS_DETAILS_FAIL,
} from '../constants/tshirtConstants'

export const tshirtItemListReducer = (state = { tshirtItems: [] }, action) => {
  switch (action.type) {
    case TSHIRTITEMS_LIST_REQUEST:
      return { loading: true, tshirtItems: [] }
    case TSHIRTITEMS_LIST_SUCCESS:
      return {
        loading: false,
        tshirtItems: action.payload.tshirtItems,
        pages: action.payload.pages,
        itemPage: action.payload.itemPage,
      }
    case TSHIRTITEMS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const tshirtItemDetailsReducer = (
  state = { tshirtItem: {} },
  action
) => {
  switch (action.type) {
    case TSHIRTITEMS_DETAILS_REQUEST:
      return { loading: true, ...state }
    case TSHIRTITEMS_DETAILS_SUCCESS:
      return { loading: false, tshirtItem: action.payload }
    case TSHIRTITEMS_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
