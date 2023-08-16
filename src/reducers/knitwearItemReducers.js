export const knitwearItemListReducer = (
  state = { knitwearItems: [] },
  action
) => {
  switch (action.type) {
    case 'KNITWEARITEMS_LIST_REQUEST':
      return { loading: true, knitwearItems: [] }
    case 'KNITWEARITEMS_LIST_SUCCESS':
      return { loading: false, knitwearItems: action.payload }
    case 'KNITWEARITEMS_LIST_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
