import axios from 'axios'
import {
  SHORTITEMS_LIST_REQUEST,
  SHORTITEMS_LIST_SUCCESS,
  SHORTITEMS_LIST_FAIL,
  SHORTITEMS_DETAILS_SUCCESS,
  SHORTITEMS_DETAILS_REQUEST,
  SHORTITEMS_DETAILS_FAIL,
} from '../constants/shortConstants'

export const listShortItems =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: SHORTITEMS_LIST_REQUEST })

      const { data } = await axios.get(
        `/api/categoryItems/shorts?keyword=${keyword}&pageNumber=${pageNumber}`
      )

      dispatch({
        type: SHORTITEMS_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: SHORTITEMS_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const listShortItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SHORTITEMS_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/categoryItems/shorts/${id}`)

    dispatch({
      type: SHORTITEMS_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SHORTITEMS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
