import {
  SETITEMS_LIST_REQUEST,
  SETITEMS_LIST_SUCCESS,
  SETITEMS_LIST_FAIL,
} from '../constants/setConstants'

export const listSetItems = () => async (dispatch) => {
  try {
    dispatch({ type: SETITEMS_LIST_REQUEST })

    const { data } = await axios.get('/api/categoryItems/sets')

    dispatch({
      type: SETITEMS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SETITEMS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
