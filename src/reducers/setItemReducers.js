export const setItemListReducer = (state = { setItems: [] }, action) => {
  switch (action.type) {
    case 'SETITEMS_LIST_REQUEST':
      return { loading: true, setItems: [] }
    case 'SETITEMS_LIST_SUCCESS':
      return { loading: false, setItems: action.payload }
    case 'SETITEMS_LIST_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
