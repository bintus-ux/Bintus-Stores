export const capItemListReducer = (state = { capItems: [] }, action) => {
  switch (action.type) {
    case 'ITEM_LIST_REQUEST':
      return { loading: true, capItems: [] }
    case 'ITEM_LIST_SUCCESS':
      return { loading: false, capItems: action.payload }
    case 'ITEM_LIST_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
