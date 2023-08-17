import axios from 'axios'
import {
  HOODIEITEMS_LIST_REQUEST,
  HOODIEITEMS_LIST_SUCCESS,
  HOODIEITEMS_LIST_FAIL,
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
