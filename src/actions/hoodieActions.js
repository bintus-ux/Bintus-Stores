import axios from 'axios'
import {
  HOODIEITEMS_LIST_REQUEST,
  HOODIEITEMS_LIST_SUCCESS,
  HOODIEITEMS_LIST_FAIL,
  HOODIEITEMS_DETAILS_REQUEST,
  HOODIEITEMS_DETAILS_SUCCESS,
  HOODIEITEMS_DETAILS_FAIL,
} from '../constants/hoodieConstants'

export const listHoodieItems = () => async (dispatch) => {
  try {
    dispatch({ type: HOODIEITEMS_LIST_REQUEST })

    const { data } = await axios.get('/api/categoryItems/hoodies')

    dispatch({
      type: HOODIEITEMS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: HOODIEITEMS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listHoodieItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: HOODIEITEMS_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/categoryItems/hoodies/${id}`)

    dispatch({
      type: HOODIEITEMS_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: HOODIEITEMS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
