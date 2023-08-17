import axios from 'axios'
import {
  TEEITEMS_LIST_REQUEST,
  TEEITEMS_LIST_SUCCESS,
  TEEITEMS_LIST_FAIL,
} from '../constants/teeConstants'

export const listTeeItems = () => async (dispatch) => {
  try {
    dispatch({ type: TEEITEMS_LIST_REQUEST })

    const { data } = await axios.get('/api/categoryItems/tees')

    dispatch({
      type: TEEITEMS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TEEITEMS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
