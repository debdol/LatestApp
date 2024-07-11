import { SEARCH_DATA, SHOW_ERROR, SHOW_PRODUCT } from "./Constant";


const apiInitialState = [{
    data: null,
    loading: true,
    error: null
}]
export const getApiDataReducer = (state = apiInitialState, action) => {
    switch (action.type) {
        case SHOW_PRODUCT: return [{
            data: action.payload,
            loading: false,
            error: null
        }];
        case SHOW_ERROR: return [{
            data: null,
            loading: false,
            error: action.payload
        }];
        default: return state
    }
}

export const getSearchedDataReducer = (state = [], action) => {
    switch (action.type) {
        case SEARCH_DATA: return action.payload;
        default: return state
    }
}