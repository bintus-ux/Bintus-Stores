import axios from 'axios'
import {
  FOOTWEARITEMS_LIST_REQUEST,
  FOOTWEARITEMS_LIST_SUCCESS,
  FOOTWEARITEMS_LIST_FAIL,
  FOOTWEARITEMS_DETAILS_REQUEST,
  FOOTWEARITEMS_DETAILS_SUCCESS,
  FOOTWEARITEMS_DETAILS_FAIL,
} from '../constants/footwearConstants'

export const listFootwearItems = () => async (dispatch) => {
  try {
    dispatch({ type: FOOTWEARITEMS_LIST_REQUEST })

    const { data } = await axios.get('/api/categoryItems/footwears')

    dispatch({
      type: FOOTWEARITEMS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FOOTWEARITEMS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listFootwearItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: FOOTWEARITEMS_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/categoryItems/footwears/${id}`)

    dispatch({
      type: FOOTWEARITEMS_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FOOTWEARITEMS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
