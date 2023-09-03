import axios from 'axios'
import {
  CAPITEMS_LIST_REQUEST,
  CAPITEMS_LIST_SUCCESS,
  CAPITEMS_LIST_FAIL,
  CAPITEMS_DETAILS_REQUEST,
  CAPITEMS_DETAILS_SUCCESS,
  CAPITEMS_DETAILS_FAIL,
} from '../constants/capConstants'

export const listCapItems =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: CAPITEMS_LIST_REQUEST })

      const { data } = await axios.get(
        `/api/categoryItems/caps?keyword=${keyword}&pageNumber=${pageNumber}`
      )

      dispatch({
        type: CAPITEMS_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: CAPITEMS_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const listCapItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CAPITEMS_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/categoryItems/caps/${id}`)

    dispatch({
      type: CAPITEMS_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CAPITEMS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
