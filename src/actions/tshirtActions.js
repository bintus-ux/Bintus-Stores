import {
  TSHIRTITEMS_LIST_REQUEST,
  TSHIRTITEMS_LIST_SUCCESS,
  TSHIRTITEMS_LIST_FAIL,
} from '../constants/tshirtConstants'

export const listTshirtItems = () => async (dispatch) => {
  try {
    dispatch({ type: TSHIRTITEMS_LIST_REQUEST })

    const { data } = await axios.get('/api/categoryItems/tshirts')

    dispatch({
      type: TSHIRTITEMS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TSHIRTITEMS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
