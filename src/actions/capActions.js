import axios from 'axios'
import {
  CAPITEMS_LIST_REQUEST,
  CAPITEMS_LIST_SUCCESS,
  CAPITEMS_LIST_FAIL,
} from '../constants/capConstants'

export const listCapItems = () => async (dispatch) => {
  try {
    dispatch({ type: CAPITEMS_LIST_REQUEST })

    const { data } = await axios.get('/api/categoryItems/caps')

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
