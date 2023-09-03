import {
  HOODIEITEMS_LIST_REQUEST,
  HOODIEITEMS_LIST_SUCCESS,
  HOODIEITEMS_LIST_FAIL,
  HOODIEITEMS_DETAILS_REQUEST,
  HOODIEITEMS_DETAILS_SUCCESS,
  HOODIEITEMS_DETAILS_FAIL,
} from '../constants/hoodieConstants'

export const hoodieItemListReducer = (state = { hoodieItems: [] }, action) => {
  switch (action.type) {
    case HOODIEITEMS_LIST_REQUEST:
      return { loading: true, hoodieItems: [] }
    case HOODIEITEMS_LIST_SUCCESS:
      return {
        loading: false,
        hoodieItems: action.payload.hoodieItems,
        pages: action.payload.pages,
        itemPage: action.payload.itemPage,
      }
    case HOODIEITEMS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const hoodieItemDetailsReducer = (
  state = { hoodieItem: {} },
  action
) => {
  switch (action.type) {
    case HOODIEITEMS_DETAILS_REQUEST:
      return { loading: true, ...state }
    case HOODIEITEMS_DETAILS_SUCCESS:
      return { loading: false, hoodieItem: action.payload }
    case HOODIEITEMS_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
