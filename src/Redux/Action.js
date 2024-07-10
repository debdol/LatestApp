import { SHOW_ERROR, SHOW_PRODUCT } from "./Constant"
import { fetchApiData } from "../Functions/Functions"

export const getApiData = () => {
    return async (dispatch) => {
        const tempApiData = fetchApiData()
            .then((response) => {
                dispatch({
                    type: SHOW_PRODUCT,
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: SHOW_ERROR,
                    payload: error
                })
            })
    }
}