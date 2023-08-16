export const tshirtItemListReducer = (state = { tshirtItems: [] }, action) => {
  switch (action.type) {
    case 'TSHIRTITEMS_LIST_REQUEST':
      return { loading: true, tshirtItems: [] }
    case 'TSHIRTITEMS_LIST_SUCCESS':
      return { loading: false, tshirtItems: action.payload }
    case 'TSHIRTITEMS_LIST_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
