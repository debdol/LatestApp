import { combineReducers } from "redux";
import { getApiDataReducer, getSearchedDataReducer } from "./Reducers";
export const rootReducer = combineReducers({
    getApiDataReducer,
    getSearchedDataReducer
})