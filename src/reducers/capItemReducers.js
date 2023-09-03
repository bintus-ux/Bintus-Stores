import {
  CAPITEMS_LIST_REQUEST,
  CAPITEMS_LIST_SUCCESS,
  CAPITEMS_LIST_FAIL,
  CAPITEMS_DETAILS_REQUEST,
  CAPITEMS_DETAILS_SUCCESS,
  CAPITEMS_DETAILS_FAIL,
} from '../constants/capConstants'

export const capItemListReducer = (state = { capItems: [] }, action) => {
  switch (action.type) {
    case CAPITEMS_LIST_REQUEST:
      return { loading: true, capItems: [] }
    case CAPITEMS_LIST_SUCCESS:
      return {
        loading: false,
        capItems: action.payload.capItems,
        pages: action.payload.pages,
        itemPage: action.payload.itemPage,
      }
    case CAPITEMS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const capItemDetailsReducer = (state = { capItem: {} }, action) => {
  switch (action.type) {
    case CAPITEMS_DETAILS_REQUEST:
      return { loading: true, ...state }
    case CAPITEMS_DETAILS_SUCCESS:
      return { loading: false, capItem: action.payload }
    case CAPITEMS_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
