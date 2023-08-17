import axios from 'axios'
import {
  SHORTITEMS_LIST_REQUEST,
  SHORTITEMS_LIST_SUCCESS,
  SHORTITEMS_LIST_FAIL,
} from '../constants/shortConstants'

export const listShortItems = () => async (dispatch) => {
  try {
    dispatch({ type: SHORTITEMS_LIST_REQUEST })

    const { data } = await axios.get('/api/categoryItems/shorts')

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
