import {
  FOOTWEARITEMS_LIST_REQUEST,
  FOOTWEARITEMS_LIST_SUCCESS,
  FOOTWEARITEMS_LIST_FAIL,
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
