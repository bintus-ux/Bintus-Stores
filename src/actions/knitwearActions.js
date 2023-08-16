import {
  KNITWEARITEMS_LIST_REQUEST,
  KNITWEARITEMS_LIST_SUCCESS,
  KNITWEARITEMS_LIST_FAIL,
} from '../constants/knitwearConstants'

export const listKnitwearItems = () => async (dispatch) => {
  try {
    dispatch({ type: KNITWEARITEMS_LIST_REQUEST })

    const { data } = await axios.get('/api/categoryItems/knitwears')

    dispatch({
      type: KNITWEARITEMS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: KNITWEARITEMS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
