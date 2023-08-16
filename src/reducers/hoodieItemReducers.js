import {
  HOODIEITEMS_LIST_REQUEST,
  HOODIEITEMS_LIST_SUCCESS,
  HOODIEITEMS_LIST_FAIL,
} from '../constants/hoodieConstants'

export const hoodieItemListReducer = (state = { hoodieItems: [] }, action) => {
  switch (action.type) {
    case HOODIEITEMS_LIST_REQUEST:
      return { loading: true, hoodieItems: [] }
    case HOODIEITEMS_LIST_SUCCESS:
      return { loading: false, hoodieItems: action.payload }
    case HOODIEITEMS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
