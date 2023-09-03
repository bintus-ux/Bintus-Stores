import axios from 'axios'
import {
  TSHIRTITEMS_LIST_REQUEST,
  TSHIRTITEMS_LIST_SUCCESS,
  TSHIRTITEMS_LIST_FAIL,
  TSHIRTITEMS_DETAILS_REQUEST,
  TSHIRTITEMS_DETAILS_SUCCESS,
  TSHIRTITEMS_DETAILS_FAIL,
} from '../constants/tshirtConstants'

export const listTshirtItems =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: TSHIRTITEMS_LIST_REQUEST })

      const { data } = await axios.get(
        `/api/categoryItems/tshirts?keyword=${keyword}&pageNumber=${pageNumber}`
      )

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

export const listTshirtItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TSHIRTITEMS_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/categoryItems/tshirts/${id}`)

    dispatch({
      type: TSHIRTITEMS_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TSHIRTITEMS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
