import axios from "axios"
import { apiData, searcheApi } from "../Api/Api"

export const fetchApiData = async () => {
    return axios.get(apiData)
}

export const fetchSearchApi = async () => {
    return axios.get(searcheApi)
}