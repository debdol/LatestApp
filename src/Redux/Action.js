import { SEARCH_DATA, SHOW_ERROR, SHOW_PRODUCT } from "./Constant"
import { fetchApiData, fetchSearchApi } from "../Functions/Functions"

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
                // console.log("error_in_search_api:", error);
                dispatch({
                    type: SHOW_ERROR,
                    payload: error
                })
            })
    }
}

export const getSearchedProductData = (item) => {
    // console.log("getSearchedProductData_action:", item);
    return {
        type: SEARCH_DATA,
        payload: item
    }
}
// export const getSearchApi = () => {
//     console.log("getSearchApi_is_called:");
//     return async (dispatch) => {
//         const tempSearchApiData = fetchSearchApi()
//             .then((response) => {
//                 console.log("response_in_search_api:", response.data);
//                 if (response.data) {
//                     dispatch({
//                         type: SHOW_PRODUCT,
//                         payload: response.data
//                     })
//                 }
//             })
//             .catch((error) => {
//                 console.log("error_in_search_api:", error);
//                 dispatch({
//                     type: SHOW_ERROR,
//                     payload: error
//                 })

//             })
//     }
// }