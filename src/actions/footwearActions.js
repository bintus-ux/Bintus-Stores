import {
  FOOTWEARITEMS_LIST_REQUEST,
  FOOTWEARITEMS_LIST_SUCCESS,
  FOOTWEARITEMS_LIST_FAIL,
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
