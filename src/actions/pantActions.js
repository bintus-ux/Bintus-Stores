import axios from 'axios'
import {
  PANTITEMS_LIST_REQUEST,
  PANTITEMS_LIST_SUCCESS,
  PANTITEMS_LIST_FAIL,
} from '../constants/pantConstants'

export const listPantItems = () => async (dispatch) => {
  try {
    dispatch({ type: PANTITEMS_LIST_REQUEST })

    const { data } = await axios.get('/api/categoryItems/pants')

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
