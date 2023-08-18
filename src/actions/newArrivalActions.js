import axios from 'axios'
import {
  NEWARRIVALITEMS_DETAILS_FAIL,
  NEWARRIVALITEMS_DETAILS_REQUEST,
  NEWARRIVALITEMS_DETAILS_SUCCESS,
} from '../constants/newArrivalConstants'

export const listNewArrivalItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: NEWARRIVALITEMS_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/categoryItems/New-Arrivals/${id}`)

    dispatch({
      type: NEWARRIVALITEMS_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: NEWARRIVALITEMS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
