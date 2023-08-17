import {
  KNITWEARITEMS_LIST_REQUEST,
  KNITWEARITEMS_LIST_SUCCESS,
  KNITWEARITEMS_LIST_FAIL,
  KNITWEARITEMS_DETAILS_REQUEST,
  KNITWEARITEMS_DETAILS_SUCCESS,
  KNITWEARITEMS_DETAILS_FAIL,
} from '../constants/knitwearConstants'

export const knitwearItemListReducer = (
  state = { knitwearItems: [] },
  action
) => {
  switch (action.type) {
    case KNITWEARITEMS_LIST_REQUEST:
      return { loading: true, knitwearItems: [] }
    case KNITWEARITEMS_LIST_SUCCESS:
      return { loading: false, knitwearItems: action.payload }
    case KNITWEARITEMS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const knitwearItemDetailsReducer = (
  state = { knitwearItem: {} },
  action
) => {
  switch (action.type) {
    case KNITWEARITEMS_DETAILS_REQUEST:
      return { loading: true, ...state }
    case KNITWEARITEMS_DETAILS_SUCCESS:
      return { loading: false, knitwearItem: action.payload }
    case KNITWEARITEMS_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
