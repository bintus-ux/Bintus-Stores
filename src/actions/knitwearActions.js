import axios from 'axios'
import {
  KNITWEARITEMS_LIST_REQUEST,
  KNITWEARITEMS_LIST_SUCCESS,
  KNITWEARITEMS_LIST_FAIL,
  KNITWEARITEMS_DETAILS_REQUEST,
  KNITWEARITEMS_DETAILS_SUCCESS,
  KNITWEARITEMS_DETAILS_FAIL,
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

export const listKnitwearItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: KNITWEARITEMS_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/categoryItems/knitwears/${id}`)

    dispatch({
      type: KNITWEARITEMS_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: KNITWEARITEMS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
