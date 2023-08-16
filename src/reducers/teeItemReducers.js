export const teeItemListReducer = (state = { teeItems: [] }, action) => {
  switch (action.type) {
    case 'TEEITEMS_LIST_REQUEST':
      return { loading: true, teeItems: [] }
    case 'TEEITEMS_LIST_SUCCESS':
      return { loading: false, teeItems: action.payload }
    case 'TEEITEMS_LIST_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
