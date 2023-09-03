import axios from 'axios'
import {
  PANTITEMS_LIST_REQUEST,
  PANTITEMS_LIST_SUCCESS,
  PANTITEMS_LIST_FAIL,
  PANTITEMS_DETAILS_REQUEST,
  PANTITEMS_DETAILS_SUCCESS,
  PANTITEMS_DETAILS_FAIL,
} from '../constants/pantConstants'

export const listPantItems =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: PANTITEMS_LIST_REQUEST })

      const { data } = await axios.get(
        `/api/categoryItems/pants?keyword=${keyword}&pageNumber=${pageNumber}`
      )

      dispatch({
        type: PANTITEMS_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PANTITEMS_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const listPantItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PANTITEMS_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/categoryItems/pants/${id}`)

    dispatch({
      type: PANTITEMS_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PANTITEMS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
