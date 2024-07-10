import axios from "axios"
import { apiData } from "../Api/Api"

export const fetchApiData = async () => {
    return axios.get(apiData)
}