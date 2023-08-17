import {
  FOOTWEARITEMS_LIST_REQUEST,
  FOOTWEARITEMS_LIST_SUCCESS,
  FOOTWEARITEMS_LIST_FAIL,
  FOOTWEARITEMS_DETAILS_REQUEST,
  FOOTWEARITEMS_DETAILS_SUCCESS,
  FOOTWEARITEMS_DETAILS_FAIL,
} from '../constants/footwearConstants'

export const footwearItemListReducer = (
  state = { footwearItems: [] },
  action
) => {
  switch (action.type) {
    case FOOTWEARITEMS_LIST_REQUEST:
      return { loading: true, footwearItems: [] }
    case FOOTWEARITEMS_LIST_SUCCESS:
      return { loading: false, footwearItems: action.payload }
    case FOOTWEARITEMS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const footwearItemDetailsReducer = (
  state = { footwearItem: {} },
  action
) => {
  switch (action.type) {
    case FOOTWEARITEMS_DETAILS_REQUEST:
      return { loading: true, ...state }
    case FOOTWEARITEMS_DETAILS_SUCCESS:
      return { loading: false, footwearItem: action.payload }
    case FOOTWEARITEMS_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
