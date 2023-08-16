import {
  CAPITEMS_LIST_REQUEST,
  CAPITEMS_LIST_SUCCESS,
  CAPITEMS_LIST_FAIL,
} from '../constants/capConstants'

export const capItemListReducer = (state = { capItems: [] }, action) => {
  switch (action.type) {
    case CAPITEMS_LIST_REQUEST:
      return { loading: true, capItems: [] }
    case CAPITEMS_LIST_SUCCESS:
      return { loading: false, capItems: action.payload }
    case CAPITEMS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
