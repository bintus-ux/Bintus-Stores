import axios from 'axios'
import {
  SETITEMS_LIST_REQUEST,
  SETITEMS_LIST_SUCCESS,
  SETITEMS_LIST_FAIL,
  SETITEMS_DETAILS_SUCCESS,
  SETITEMS_DETAILS_REQUEST,
  SETITEMS_DETAILS_FAIL,
} from '../constants/setConstants'

export const listSetItems =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: SETITEMS_LIST_REQUEST })

      const { data } = await axios.get(
        `/api/categoryItems/sets?keyword=${keyword}&pageNumber=${pageNumber}`
      )

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

export const listSetItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SETITEMS_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/categoryItems/sets/${id}`)

    dispatch({
      type: SETITEMS_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SETITEMS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
